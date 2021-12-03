import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Page from '../Page';
import { List, ListItem } from '../UI/List';
import { fetchSwotData } from '../../store/reducers/swot/actions';
const Loader = ()=>{
  return (<div>Cargando ....</div>);
}

const SwotList = ()=>{

  const swot = useSelector(({swot})=>swot);
  const dispatch = useDispatch();
  const {hasMore, items, currentPage, pageSize, totalDocs} = swot;
  const fetchMore = () => {
    console.log("Loading More");
    fetchSwotData(dispatch, currentPage + 1, pageSize)
  }

  useEffect(()=>{
    if (hasMore) {
      fetchMore();
    }
  }, []);

  const itemsUI = items.map((o,i)=>{
    return (<ListItem key={i}>{o.swotType} {o.swotDesc}</ListItem>);
  });
  return (
    <Page showHeader title="SWOT List" showNavBar>
      <List
        id="swotList"
        hasMore={hasMore}
        fetchMore={fetchMore}
        loader={(<Loader />)}
        dataLength={items.length}
      >
        {itemsUI}
      </List>
    </Page>
  );
}

export default SwotList;
