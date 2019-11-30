import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this?
                </div>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Yesterday at 5:00PM" 
                    comment="Wooooo!!" 
                    avatar={faker.image.avatar()} 
                />
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Yesterday at 5:00PM" 
                    comment="Wooooo!!" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Yesterday at 5:00PM" 
                    comment="Wooooo!!" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Coco" 
                    timeAgo="Today at 2:34PM" 
                    comment="Great post~" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Stark" 
                    timeAgo="Today at 3:45PM" 
                    comment="Nice!" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

