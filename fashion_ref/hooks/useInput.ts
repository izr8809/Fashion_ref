import { useInput } from '@mui/base';
import { useState, useCallback } from 'react';


export default (initValue : null | string) => {
  const [value, setter] = useState(initValue);
  const handler : any = useCallback((e : any) => {
    setter(e);
  }, []);
  return [value, handler, setter];
};
