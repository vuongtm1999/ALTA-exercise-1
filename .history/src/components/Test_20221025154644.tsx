interface Props {
    isStudent: boolean
}

const SubText: React.FC = (props) => {
    return (
        <div>
            {
                (props.isStudent)
                    ? <p>You are a student.</p>
                    : <p>You aren't a student.</p>
            }
        </div>
    );
};
Để khai báo props trong TypeScript, bạn cũng làm tương tự như state là tạo một interface, truyền vào Component và khai báo kiểu của props.

interface Props {
    isStudent: boolean
}

const SubText: React.FC<Props> = (props) => {
    return (
        <div>
            {
                (props.isStudent)
                    ? <p>You are a student.</p>
                    : <p>You aren't a student.</p>
            }
        </div>
    );
};