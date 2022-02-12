export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        name: 'jason',
      },
      content: '첫 번째 게시글',
      Images: [
        {
          src: 'https://w.namu.la/s/43d991eb90905f3532cac04e8764f211911dccc3f80f952dd2f2e57579b15a48f2e89403659b830a0fbf1b0ef21898da36da076dd20ab6132e46c4ec7d5fd5a210df820c2caf7f4a1bc75460a0bca65a048150e0525a504254d248507d35956a',
        },
        {
          src: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/623Z/image/wSZs7Y8AOq_KgRFTBpyBAb0Gy6E.jpg',
        },
        {
          src: 'https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXzy1pV75KnA706fJwmW1kr136dPZqwN-vB7f0TWlPQNjujd5D0EehkQ5SNHkiT2TAfbX9WQrMTiWubRPMXOhqkJEHSE.jpg?r=4cc',
        },
      ],
      Comments: [
        {
          User: {
            name: 'nero',
          },
          content: '귀멸의 칼날 다음화 언제나오냐',
        },
        {
          User: {
            name: 'john snow',
          },
          content: '까마귀 복장을 입어라',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
