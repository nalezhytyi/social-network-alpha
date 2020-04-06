import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hello', like: '20'},
        {id: 2, message: 'hi', like: '221'},
        {id: 3, message: 'hi', like: '33'},
        {id: 4, message: 'hi', like: '1'}
    ]
};

it('length of post should be incremented', () => {
    // 1. Test data
    let action = addPostActionCreator('helllow');

    // 2.action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    // 1. Test data
    let action = addPostActionCreator('helllow');

    // 2.action
    let newState = profileReducer(state, action);

    //expectation

    expect(newState.posts[4].message).toBe('helllow');
});

it('after deleting length of messages should be decrement', () => {
    // 1. Test data
    let action = deletePost(1);

    // 2.action
    let newState = profileReducer(state, action);

    //expectation

    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. Test data
    let action = deletePost(1000);

    // 2.action
    let newState = profileReducer(state, action);

    //expectation

    expect(newState.posts.length).toBe(4);
});

