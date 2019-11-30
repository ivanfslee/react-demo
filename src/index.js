import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail 
                author="Sam" 
                timeAgo="Yesterday at 5:00PM" 
                comment="Wooooo!!" 
                avatar={faker.image.avatar()} 
            />
            <CommentDetail 
                author="Coco" 
                timeAgo="Today at 2:34PM" 
                comment="Great post~" 
                avatar={faker.image.avatar()} 
            />
            <CommentDetail 
                author="Stark" 
                timeAgo="Today at 3:45PM" 
                comment="Nice!" 
                avatar={faker.image.avatar()} 
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

