
export const compress = function(img, Orientation) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    let tCanvas = document.createElement("canvas");
    let tctx = tCanvas.getContext("2d");
    // let initSize = img.src.length;
    let width = img.width;
    let height = img.height;

    let ratio;
    if ((ratio = (width * height) / 4000000) > 1) {

        ratio = Math.sqrt(ratio);
        width /= ratio;
        height /= ratio;
    } else {
        ratio = 1;
    }
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let count;
    if ((count = (width * height) / 1000000) > 1) {

        count = ~~(Math.sqrt(count) + 1);

        let nw = ~~(width / count);
        let nh = ~~(height / count);
        tCanvas.width = nw;
        tCanvas.height = nh;
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
            }
        }
    } else {
        ctx.drawImage(img, 0, 0, width, height);
    }

    // if (Orientation != "" && Orientation != 1) {
    //     switch (Orientation) {
    //         case 6:
    //             this.rotateImg(img, "left", canvas);
    //             break;
    //         case 8:
    //             this.rotateImg(img, "right", canvas);
    //             break;
    //         case 3:
    //             this.rotateImg(img, "right", canvas);
    //             this.rotateImg(img, "right", canvas);
    //             break;
    //     }
    // }

    let ndata = canvas.toDataURL("image/jpeg", 0.5);
    tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
    return ndata;
};

let rotateImg = function(img, direction, canvas) {

    const min_step = 0;
    const max_step = 3;
    if (img == null) return;

    let height = img.height;
    let width = img.width;
    let step = 2;
    if (step == null) {
        step = min_step;
    }
    if (direction == "right") {
        step++;

        step > max_step && (step = min_step);
    } else {
        step--;
        step < min_step && (step = max_step);
    }

    let degree = (step * 90 * Math.PI) / 180;
    let ctx = canvas.getContext("2d");
    switch (step) {
        case 0:
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0);
            break;
        case 1:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, 0, -height);
            break;
        case 2:
            canvas.width = width;
            canvas.height = height;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, -height);
            break;
        case 3:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, 0);
            break;
    }
};
//将base64转换为文件
export const dataURLtoFile = (dataurl,file)=>{
    var arr = dataurl.split(","),
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], file.name, {
        type: file.type
    });
};
