document.addEventListener('DOMContentLoaded', function () {
    const illustrationImage = document.getElementById('illustrationImage');
    const wholeHomeCollapse = document.getElementById('collapseWholeHome');
    const individualDevicesCollapse = document.getElementById('collapseIndividualDevices');
    const insightsCollapse = document.getElementById('collapseInsights');

    wholeHomeCollapse.addEventListener('show.bs.collapse', function () {
        illustrationImage.src = 'img/Products/Tech/1.png';
        illustrationImage.style.opacity = '0.5';
        setTimeout(() => { illustrationImage.style.opacity = '1'; }, 300);
    });

    individualDevicesCollapse.addEventListener('show.bs.collapse', function () {
        illustrationImage.src = 'img/Products/Tech/2.png';
        illustrationImage.style.opacity = '0.5';
        setTimeout(() => { illustrationImage.style.opacity = '1'; }, 300);
    });

    insightsCollapse.addEventListener('show.bs.collapse', function () {
        illustrationImage.src = 'img/Products/Tech/3.png';
        illustrationImage.style.opacity = '0.5';
        setTimeout(() => { illustrationImage.style.opacity = '1'; }, 300);
    });
});

function switchDeviceVideo(event, dv) {
    const video = document.getElementById('deviceVideo');
    const tabsContainer = event.currentTarget.closest('.tabs');
    const buttons = tabsContainer.querySelectorAll('.tab-button');

    // Update active button within the same tabs container
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Switch video source
    if (dv === 'device-AC') {
        video.src = 'img/Products/Tech/6.mp4';
    } else if (dv === 'device-Washing') {
        video.src = 'img/Products/Tech/7.mp4';
    } else if (dv === 'device-Fridge') {
        video.src = 'img/Products/Tech/8.mp4';
    }

    // Replay the video
    video.load();
    video.play();
}

function switchVideo(event, tab) {
    const video = document.getElementById('energyVideo');
    const tabsContainer = event.currentTarget.closest('.tabs');
    const buttons = tabsContainer.querySelectorAll('.tab-button');

    // Update active button within the same tabs container
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Switch video source
    if (tab === 'whole-home') {
        video.src = 'img/Products/Tech/5.mp4';
    } else if (tab === 'by-devices') {
        video.src = 'img/Products/Tech/4.mp4';
    }

    // Replay the video
    video.load();
    video.play();
}