import { privateAxios } from "../../utils/Axios";
export const fetchSwotData = (dispatch, page, pageItem, text)=>{
  dispatch(
    {
      type:"SWOT_START_FETCH",
      payload:null
    }
  )
  privateAxios.get(`/api/swot/facet/${page}/${pageItem}/${text}`)
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
