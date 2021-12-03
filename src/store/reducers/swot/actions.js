import { privateAxios } from "../../utils/Axios";
export const fetchSwotData = (dispatch, page, pageItem, text)=>{
  dispatch(
    {
      type:"SWOT_START_FETCH",
      payload:null
    }
  )
  privateAxios.get(`/api/swot/facet/${page}/${pageItem}`)
  .then(({data})=>{
    console.log(data);
    dispatch(
      {
        type:"SWOT_FETCH_SUCCESS",
        payload: data
      }
    )
  })
  .catch((err)=>{
    console.log(err);
    dispatch(
      {
        type:"SWOT_FETCH_ERROR",
        payload: ["Error al traer Info"]
      }
    )
  });
}

export const addNewSwot = (dispatch, swotDesc, swotMeta, swotType, navigate, to)=>{
  dispatch(
    {type:"SWOT_ADD_START", payload:null}
  );
  privateAxios.post('/api/swot/new', {swotDesc, swotType, swotMeta})
    .then(({data})=>{
      console.log(data);
      dispatch(
        {
          type:"SWOT_ADD_SUCCESS",
          payload:null
        }
      );
      dispatch({ type:"SWOT_LIST_CLEAR", payload:null});
      navigate(to);
    })
    .catch((err)=>{
      console.log(err);
      dispatch(
        {type:"SWOT_ADD_ERROR", payload:null}
      )
    });
}
