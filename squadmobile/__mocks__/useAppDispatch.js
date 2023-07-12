import { useDispatch } from 'react-redux';

const useAppDispatch = () => {
  const dispatch = useDispatch();

  const customDispatch = (action) => {
    // Add any custom logic here if needed
    dispatch(action);
  };

  return customDispatch;
};

export default useAppDispatch;
