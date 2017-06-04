export interface OvalColorTarget {}

class ColorTarget implements OvalColorTarget {}

export default function colorTarget(): OvalColorTarget {
  return new ColorTarget();
}
