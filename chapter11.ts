/**
 * 비동기 작업의 결과를 처리하는 객체
 */

type LoadingTask = {
	state: 'LOADING';
};

type SuccessTask = {
	state: 'SUCCESS';
	response: {
		data: string;
	};
};
type FailedTask = {
	state: 'FAILED';
	error: {
		message: string;
	};
};

type AsyncTask = LoadingTask | SuccessTask | FailedTask;

// 로딩중=>'로딩중'
// 실패=>'실패:에러메시지'
// 성공->'성공:데이터'

function processResult(task: AsyncTask) {
	switch (task.state) {
		case 'LOADING': {
			console.log('로딩중');
			break;
		}
		case 'FAILED': {
			console.log(`에러발생 : ${task.error.message}`);
			break;
		}
		case 'SUCCESS': {
			console.log(`성공:${task.response.data}`);
			break;
		}
	}
}

const loading: AsyncTask = {
	state: 'LOADING',
};

const failed: AsyncTask = {
	state: 'FAILED',
	error: {
		message: '오류발생원인은~',
	},
};

const success: AsyncTask = {
	state: 'SUCCESS',
	response: {
		data: '데이터~',
	},
};
