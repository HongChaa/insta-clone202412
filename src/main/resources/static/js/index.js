/* src/main/resources/static/js/index.js */

import initStories from './components/stories.js';
import initCreateFeedModal from './components/create-feed-modal.js';

// 모든 태그가 렌더링되면 실행됨
document.addEventListener('DOMContentLoaded', () => {
  initStories();
  initCreateFeedModal();
});