document.addEventListener('DOMContentLoaded', () => {
  const normalBtn = document.getElementById('normalBtn');
  const gpuBtn = document.getElementById('gpuBtn');
  const layer1 = document.getElementById('layer1');
  const layer2 = document.getElementById('layer2');
  const layer3 = document.getElementById('layer3');

  let timerId;

  function stopAnimation() {
    [layer1, layer2, layer3].forEach((layer) => {
      layer.classList.remove(
        'normal-animation',
        'gpu-animation',
        'normal-rotate-animation',
        'gpu-rotate-animation',
        'gpu-acceleration'
      );
    });
    clearTimeout(timerId);
  }

  function addNormalClass() {
    layer1.classList.add('normal-animation');
    layer2.classList.add('normal-rotate-animation');
    layer3.classList.add('normal-rotate-animation');
  }

  function addGPUClass() {
    layer1.classList.add('gpu-acceleration', 'gpu-animation');
    layer2.classList.add('gpu-acceleration', 'gpu-rotate-animation');
    layer3.classList.add('gpu-acceleration', 'gpu-rotate-animation');
  }

  function startAnimation(isGPU) {
    stopAnimation();

    isGPU ? addGPUClass() : addNormalClass();

    timerId = setTimeout(() => {
      stopAnimation();
    }, 5000);
  }

  normalBtn.addEventListener('click', () => {
    startAnimation(false);
  });

  gpuBtn.addEventListener('click', () => {
    startAnimation(true);
  });
});
