type Props = {
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