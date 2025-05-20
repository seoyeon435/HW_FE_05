const categoryLinks = document.querySelectorAll('.category-bar a');

categoryLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('hovered');
    });

    link.addEventListener('mouseleave', () => {
        link.classList.remove('hovered');
    });
});


/* 6주차 과제 */

// 총 건수 계산하는 함수 정의
const totalCountDisplay = document.getElementById('total-count-value');

function updateTotalCount() {
    let sum = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
        const countSpan = checkbox.parentElement.querySelector('.number');
        if (countSpan) {
            sum += parseInt(countSpan.innerText); //HTML에서 기본적으로 문자열로 읽어오기 때문에 숫자로 변환한다!
        }
        }
    });
    totalCountDisplay.innerText = sum;
}



// 체크박스에 이벤트 리스너 추가하기

const selectedCategories = document.querySelector('.selected');
const checkboxes = document.querySelectorAll('.category-detail input[type="checkbox"]');


const resetButton = document.querySelector('.reset');
const resetIcon = resetButton.querySelector('img'); // <img>로 되어 있어야 합니다
const defaultIconPath = "/static/assets/reset.svg";
const activeIconPath = "/static/assets/icons/reset_active.svg";

checkboxes.forEach(checkbox => {
    // 사용자가 체크하거나 체크 해제할 때마다 동작하도록 'change' 사용함
    checkbox.addEventListener('change', () => {
        // 체크박스의 부모 요소의 텍스트를 가져와서 카테고리 이름으로 저장
        const categoryName = checkbox.parentElement.innerText.trim();
        // 중복 확인하기 위한 태그
        const existingTag = selectedCategories.querySelector(`.category-tag[data-name="${categoryName}"]`);

        if (checkbox.checked && !existingTag) {
        const tag = document.createElement('div');
        tag.classList.add('category-tag');
        tag.setAttribute('data-name', categoryName);
        tag.innerHTML = `
            <span>${categoryName}</span>
            <button class="remove-tag">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99992 11.1668L5.91659 15.2502C5.76381 15.4029 5.56936 15.4793 5.33325 15.4793C5.09714 15.4793 4.9027 15.4029 4.74992 15.2502C4.59714 15.0974 4.52075 14.9029 4.52075 14.6668C4.52075 14.4307 4.59714 14.2363 4.74992 14.0835L8.83325 10.0002L4.74992 5.91683C4.59714 5.76405 4.52075 5.56961 4.52075 5.3335C4.52075 5.09738 4.59714 4.90294 4.74992 4.75016C4.9027 4.59738 5.09714 4.521 5.33325 4.521C5.56936 4.521 5.76381 4.59738 5.91659 4.75016L9.99992 8.8335L14.0833 4.75016C14.236 4.59738 14.4305 4.521 14.6666 4.521C14.9027 4.521 15.0971 4.59738 15.2499 4.75016C15.4027 4.90294 15.4791 5.09738 15.4791 5.3335C15.4791 5.56961 15.4027 5.76405 15.2499 5.91683L11.1666 10.0002L15.2499 14.0835C15.4027 14.2363 15.4791 14.4307 15.4791 14.6668C15.4791 14.9029 15.4027 15.0974 15.2499 15.2502C15.0971 15.4029 14.9027 15.4793 14.6666 15.4793C14.4305 15.4793 14.236 15.4029 14.0833 15.2502L9.99992 11.1668Z" fill="#DDDDDD"/>
                </svg>
            </button>
    `;

        tag.querySelector('.remove-tag').addEventListener('click', () => {
            // X 버튼을 누르면 체크박스 해제
            checkbox.checked = false;
            // X 버튼을 누르면 해당 카테고리 태그를 html 에서 삭제
            tag.remove();

            // 체크된 항목이 없으면 숨기기
            const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
            selectedCategories.style.display = anyChecked ? 'flex' : 'none';

            
            resetIcon.setAttribute('src', anyChecked ? activeIconPath : defaultIconPath);

            if (anyChecked) {
                resetButton.classList.add('active');
                resetIcon.setAttribute('src', activeIconPath);
            } else {
                resetButton.classList.remove('active'); // ✅ 이거 추가!
                resetIcon.setAttribute('src', defaultIconPath);
            }

            updateTotalCount();
        });

        selectedCategories.appendChild(tag);
        } else if (!checkbox.checked && existingTag) {
            // 체크박스 해제했을 때 existingTag가 있다면 해당 태그 삭제
        existingTag.remove();
        }

        // 체크된 항목이 없으면 숨기기
        const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
        selectedCategories.style.display = anyChecked ? 'flex' : 'none';

        updateTotalCount();

        if (anyChecked) {
            resetButton.classList.add('active');
            resetIcon.setAttribute('src', activeIconPath); // 
        } else {
            resetButton.classList.remove('active');
            resetIcon.setAttribute('src', defaultIconPath); // 
        }
    });   
});


// 초기화 버튼
resetButton.addEventListener('click', () => {
    checkboxes.forEach(cb => {
        // 초기화 버튼 누르면 모튼 체크박스 해제시킴
        cb.checked = false;
    });

    selectedCategories.innerHTML = '';
    selectedCategories.style.display = 'none';

    resetButton.classList.remove('active');


    resetIcon.setAttribute('src', defaultIconPath);

    updateTotalCount();
});
