/**
 *
 * Asynchronously loads the component for Toaster
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
