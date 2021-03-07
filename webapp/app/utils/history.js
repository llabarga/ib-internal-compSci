import { createBrowserHistory } from 'history';

 const history = createBrowserHistory({
    basename: process.env.NODE_ENV === 'production' ? '/ib-internal-compSci/' : '/' ,
  });

//const history = createBrowserHistory();
export default history;