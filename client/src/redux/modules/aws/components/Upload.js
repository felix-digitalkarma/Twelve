import React, { Component } from 'react';

import Dropzone from './Dropzone';
import Progress from './Progress';
const region = process.env.AWS_REGION;

class Upload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
			bucket: '',
			uploading: false,
			uploadProgress: {},
			successfullUploaded: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.onFilesAdded = this.onFilesAdded.bind(this);
		this.uploadFiles = this.uploadFiles.bind(this);
		this.sendRequest = this.sendRequest.bind(this);
		this.renderActions = this.renderActions.bind(this);
	}

	onFilesAdded(files) {
		this.setState(prevState => ({
			files: prevState.files.concat(files),
		}));
	}

	async uploadFiles() {
		this.setState({ uploadProgress: {}, uploading: true });
		const promises = [];
		const bucket = this.state.bucket;
		this.state.files.forEach(file => {
			promises.push(this.sendRequest(file, bucket));
		});
		try {
			await Promise.all(promises);

			this.setState({ successfullUploaded: true, uploading: false });
		} catch (e) {
			// Not Production ready! Do some error handling here instead...
			this.setState({ successfullUploaded: true, uploading: false });
		}
	}

	sendRequest(file, bucket) {
		return new Promise((resolve, reject) => {
			const req = new XMLHttpRequest();

			req.upload.addEventListener('progress', event => {
				if (event.lengthComputable) {
					const copy = { ...this.state.uploadProgress };
					copy[file.name] = {
						state: 'pending',
						percentage: (event.loaded / event.total) * 100,
					};
					this.setState({ uploadProgress: copy });
				}
			});

			req.upload.addEventListener('load', event => {
				const copy = { ...this.state.uploadProgress };
				copy[file.name] = { state: 'done', percentage: 100 };
				this.setState({ uploadProgress: copy });
				resolve(req.response);
			});

			req.upload.addEventListener('error', event => {
				const copy = { ...this.state.uploadProgress };
				copy[file.name] = { state: 'error', percentage: 0 };
				this.setState({ uploadProgress: copy });
				reject(req.response);
			});

			const formData = new FormData();
			formData.append('file', file, file.name);

			req.open('POST', `/api/aws/upload/${bucket}`);
			req.send(formData);
		});
	}

	renderProgress(file) {
		const uploadProgress = this.state.uploadProgress[file.name];
		if (this.state.uploading || this.state.successfullUploaded) {
			return (
				<div className='ProgressWrapper'>
					<Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
					<i className='fas fas-check-circle CheckIcon text-primary'></i>
				</div>
			);
		}
	}

	renderActions() {
		if (this.state.successfullUploaded) {
			return <button onClick={() => this.setState({ files: [], successfullUploaded: false })}>Clear</button>;
		} else {
			return (
				<button
					className='brand-btn btn-primary'
					disabled={this.state.files.length < 0 || this.state.uploading}
					onClick={this.uploadFiles}
				>
					Upload
				</button>
			);
		}
	}

	handleChange(evt) {
		this.setState({ bucket: evt.target.value });
	}

	render() {
		return (
			<div className='Upload bg-form p-3 border-form'>
				<h2 className='Title text-left text-light font-bold'>Upload Files</h2>
				<p>
					For multiple files, please drag and drop over the circle area. Please limit to{' '}
					<span className='text-primary'>25</span> images per upload{' '}
					<span className='text-muted'>(testing)</span>.
				</p>
				<label className='text-light font-bold'>Choose Client Folder </label>
				<select className='form-control' onChange={this.handleChange}>
					<option value=''>Select Client</option>
					<option value='luckychicken'>Lucky Chicken</option>
					<option value='sealighting'>SEA Lighting</option>
				</select>

				<div className='Content bg-form'>
					<div>
						<Dropzone
							onFilesAdded={this.onFilesAdded}
							disabled={this.state.uploading || this.state.successfullUploaded}
						/>
					</div>
					<div className='Files'>
						<h6 className='text-muted font-bold'>Files: {this.state.files.length}</h6>

						{this.state.files.map(file => {
							return (
								<div key={file.name} className='Row'>
									<span className='Filename text-light'>{file.name}</span>
									{this.renderProgress(file)}
								</div>
							);
						})}
					</div>
				</div>
				<div className='Actions p-2'>{this.renderActions()}</div>

				{this.state.files.length > 0 && (
					<p>
						Files will be found here: <br />
						{this.state.files.map(file => {
							return (
								<div key={file.name}>
									<code>
										<span className='Filename '>
											{`https://${this.state.bucket || '<bucket>'}.s3.us-west-1.amazonaws.com/${
												file.name
											}`}
										</span>
									</code>
								</div>
							);
						})}
					</p>
				)}
			</div>
		);
	}
}

export default Upload;
