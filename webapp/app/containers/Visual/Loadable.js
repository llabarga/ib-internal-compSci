/**
 *
 * Asynchronously loads the component for Visual
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
