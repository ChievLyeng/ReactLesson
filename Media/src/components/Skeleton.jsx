import classNames from 'classnames';

export const Skeleton = ({times}) => {
    const boxes = Array(times).fill(0).map((_,i) => {
        return <div key={i} />;
    });
    
    return boxes;
}