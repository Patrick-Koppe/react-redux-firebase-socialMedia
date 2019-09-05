let db = {

    users: [
        {
            userId: 'fjker345hj535636hhg',
            email: 'user@mail.com',
            handle: 'user',
            createdAt: '2019-03.15T10:59:52.798Z',
            imageUrl: 'image/dafshfjsgskgg/sfkgjdkfgjdkfg',
            bio: 'Hell my name is user, nice to meet you',
            website: 'htpps://user.com',
            location: 'London UK'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2019-09-02T08:25:23.445Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'klsjgkdjsgh2345dsfsf',
            body: 'nice one mate!',
            createdAt: '2019-03.15T10:59:52.798Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'ksdkjfj324sdkfslf',
            type: 'like | comment',
            createdAt: '2019-03-15T10:59:52.789Z'
        }
    ]
};
const userDetials = {
    // Redux data
    credentials: {
        userId: 'fjker345hj535636hhg',
        email: 'user@mail.com',
        handle: 'user',
        createdAt: '2019-03.15T10:59:52.798Z',
        imageUrl: 'image/dafshfjsgskgg/sfkgjdkfgjdkfg',
        bio: 'Hell my name is user, nice to meet you',
        website: 'htpps://user.com',
        location: 'London UK'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'hh3259856jergje3955'
        },
        {
            userHandle: 'user',
            screamId: 'adf84w8545gsfgreg34'
        }
    ]
};
