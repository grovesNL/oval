export interface OvalTargetSet {}

class TargetSet implements OvalTargetSet {}

export default function targetSet(): OvalTargetSet {
  return new TargetSet();
}
