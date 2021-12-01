import InfiniteScroll from 'react-infinite-scroll-component';
import './index.css';

export const List = ({id, dataLength, fetchMore, hasMore, loader, children}) => {
  return (
    <div id={id} className="list">
      <InfiniteScroll
        dataLength={dataLength}
        next={fetchMore}
        hasMore={hasMore}
        loader={loader||(<div>Loading ... </div>)}
        scrollableTarger={id}
      >
        {children}
      </InfiniteScroll>
    </div>
  )
}

export const ListItem = ({children}) => {
  return (<div className="listitem">{children}</div>);
}
