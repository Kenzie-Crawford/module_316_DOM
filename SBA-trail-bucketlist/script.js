const trailform = document.getElementById('trail-form');
const trailList = document.getElementById('trail-list');

const trailNameInput = document.querySelector('#trail-name');
const trailDifficultySelect = document.querySelector('#trail-difficulty');
const trailCategorySelect = document.querySelector('#trail-category');
const dogFriendlyCheckbox = document.querySelector('#dog-friendly');
const wheelchairCheckbox = document.querySelector('#wheelchair-accessible');

trailform.addEventListener('submit', (event) => {
    event.preventDefault();

    const trailData = {
        name: trailNameInput.value.trim(),
        difficulty: trailDifficultySelect.value,
        category: trailCategorySelect.value,
        dogFriendly: dogFriendlyCheckbox.checked,
        wheelchair: wheelchairCheckbox.checked

    };

    const trailItem = createTrailItem(trailData);
    trailList.appendChild(trailItem);

    trailform.reset();
});

function createTrailItem(trail) {
    const li = document.createElement('li');
    li.classList.add('trail-item');

    li.textContent =    `${trail.name}
                         (Difficulty: ${trail.difficulty})
                        (Category: ${trail.category})`;

    const checkboxInfo = [];
    if (trail.dogFriendly) checkboxInfo.push('Dog Friendly!');
    if (trail.wheelchair) checkboxInfo.push('WheelChair Accessible');

    if (checkboxInfo.length > 0) {
        li.textContent += `[${checkboxInfo.join(',')}]`;
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete Trail";
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteBtn);

    return li;


}