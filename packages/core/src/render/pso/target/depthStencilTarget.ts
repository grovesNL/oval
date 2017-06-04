export interface OvalDepthStencilTarget {}

class DepthStencilTarget implements OvalDepthStencilTarget {}

export default function depthStencilTarget(): OvalDepthStencilTarget {
  return new DepthStencilTarget();
}
