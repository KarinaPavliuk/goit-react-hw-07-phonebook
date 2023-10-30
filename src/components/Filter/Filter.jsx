// import { useDispatch, useSelector } from 'react-redux';
// import { handleFilterChanges } from 'store/filter/slice';
// import { getFilter } from 'store/selectors';

// export const Filter = () => {
//   const filter = useSelector(getFilter);

//   const dispatch = useDispatch();

//   const handleChange = ({ target }) => {
//     dispatch(handleFilterChanges(target.value));
//   };

//   return (
//     <>
//       <p>Find contacts by name</p>
//       <input type="text" name="filter" value={filter} onChange={handleChange} />
//     </>
//   );
// };
