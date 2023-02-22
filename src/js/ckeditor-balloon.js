import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
import $ from 'jquery';


$(".editor").each(function () {
    const el = this;
    BalloonEditor.create(el).catch((error) => {
        console.error(error);
    });
});
