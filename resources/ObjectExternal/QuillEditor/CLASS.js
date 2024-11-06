class QuillEditor extends Simplicite.UI.ExternalObject {
	async render(params, data = {}) {
		// console.log(params, data);
		$ui.loadCSS({
			url: 'https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css',
			onload: () => $ui.loadScript({
				url: 'https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js',
				onload: () => {
					// console.log('Quil loaded !');
					const quill = new Quill('#quilleditor-editor', { theme: 'snow' });
					$('#apptestquill-ok').on('click', () => {
						alert(quill.getSemanticHTML());
						//console.log(quill.getContents());
					});
				}
			})
		});
	}
}