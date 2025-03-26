$(document)
.on('click', '.add_button, .add', layerToggle)

function layerToggle() {
    $('.layer').toggle()
}

$(document).on('click', '.add', function() {
    const title = $('#titleInput').val().trim();
    const content = $('#contentInput').val().trim();

    if (title && content) {
        // .output 영역이 없으면 생성
        if (!document.querySelector('.output')) {
            const output = document.createElement('div');
            output.classList.add('output');
            document.body.appendChild(output); // body에 .output을 추가
        }

        // 새 게시물을 .output에 추가
        const newPost = document.createElement('div');
        newPost.classList.add('post-container');
        newPost.style.background = 'white';
        newPost.style.padding = '10px';
        newPost.style.margin = '10px 0';
        newPost.style.borderRadius = '5px';
        newPost.style.width = '800px';
        newPost.style.height = '110px'
        newPost.style.margin = '0 auto 20px';

        const titleElement = document.createElement('h1');
        titleElement.style.fontSize = '20px';
        titleElement.style.marginBottom = '5px';
        titleElement.textContent = title;

        const contentElement = document.createElement('p');
        contentElement.style.fontSize = '16px';
        contentElement.textContent = content;

        newPost.appendChild(titleElement);
        newPost.appendChild(contentElement);

        // .output에 새 게시물 추가
        const output = document.querySelector('.output');
        output.appendChild(newPost);

        // .output 영역이 표시되도록
        output.style.display = 'block';

        // 입력 필드 초기화
        $('#titleInput').val('');
        $('#contentInput').val('');
        $('.layer').hide();
    } else {
        alert('제목과 내용을 입력해주세요!');
    }
});