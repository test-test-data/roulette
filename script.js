const roulette = document.querySelector('.roulette');
const spinButton = document.getElementById('spin-button');
const resultElement = document.getElementById('result');
const segments = document.querySelectorAll('.segment span');
const numSegments = segments.length;
let spinning = false;

spinButton.addEventListener('click', () => {
    if (spinning) return;
    spinning = true;

    const deg = Math.floor(Math.random() * 3600) + 360 * 3; // 回転数と最終的な角度
    roulette.style.transition = 'transform 5s cubic-bezier(0.1, 0.7, 1.0, 0.1)';
    roulette.style.transform = `rotate(${deg}deg)`;

    spinButton.disabled = true;
    resultElement.textContent = '';

    setTimeout(() => {
        spinning = false;
        roulette.style.transition = 'none';
        const finalDeg = deg % 360;
        const winningSegmentIndex = Math.floor(numSegments - (finalDeg / (360 / numSegments))) % numSegments;
        resultElement.textContent = `おめでとう！ 「${segments[winningSegmentIndex].textContent}」 が当たりました！`;
        spinButton.disabled = false;
    }, 5000); // アニメーション時間と合わせる
});
