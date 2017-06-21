const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = 'd5c234ff7b9b6bb96e7a125b8f6755ae539eb7e6b0ebabfc4dffe26f021059e8';

function getQuestions () {
  const headers = new Headers({
    'Authorization':`Apikey ${API_KEY}`
  });
  return fetch(`${BASE_URL}/questions`, {headers})
    .then(res => res.json());
}

function renderQuestionSummary (question) {
  return `
    <div class="question-summary">
      ${question.title}
    </div>
  `;
}
function renderQuestionList (questions) {
  return questions.map(renderQuestionSummary).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const questionList = document.querySelector('#questions-list');

  getQuestions().then(questions => {
    questionList.innerHTML = renderQuestionList(questions);
  })
});







/* */
