var gdjs;(function(a){let i;(function(t){t[t.None=0]="None",t[t.WindowLeft=1]="WindowLeft",t[t.WindowRight=2]="WindowRight",t[t.Proportional=3]="Proportional",t[t.WindowCenter=4]="WindowCenter"})(i||(i={}));let n;(function(t){t[t.None=0]="None",t[t.WindowTop=1]="WindowTop",t[t.WindowBottom=2]="WindowBottom",t[t.Proportional=3]="Proportional",t[t.WindowCenter=4]="WindowCenter"})(n||(n={}));class D extends a.RuntimeBehavior{constructor(e,o,r){super(e,o,r);this._useLegacyBottomAndRightAnchors=!1;this._hasJustBeenCreated=!0;this._leftEdgeDistance=0;this._rightEdgeDistance=0;this._topEdgeDistance=0;this._bottomEdgeDistance=0;this._oldDrawableX=0;this._oldDrawableY=0;this._oldWidth=0;this._oldHeight=0;this._parentOldMinX=0;this._parentOldMinY=0;this._parentOldMaxX=0;this._parentOldMaxY=0;this._relativeToOriginalWindowSize=!!o.relativeToOriginalWindowSize,this._leftEdgeAnchor=o.leftEdgeAnchor,this._rightEdgeAnchor=o.rightEdgeAnchor,this._topEdgeAnchor=o.topEdgeAnchor,this._bottomEdgeAnchor=o.bottomEdgeAnchor,this._useLegacyBottomAndRightAnchors=o.useLegacyBottomAndRightAnchors===void 0?!0:o.useLegacyBottomAndRightAnchors}updateFromBehaviorData(e,o){return e.leftEdgeAnchor!==o.leftEdgeAnchor&&(this._leftEdgeAnchor=o.leftEdgeAnchor),e.rightEdgeAnchor!==o.rightEdgeAnchor&&(this._rightEdgeAnchor=o.rightEdgeAnchor),e.topEdgeAnchor!==o.topEdgeAnchor&&(this._topEdgeAnchor=o.topEdgeAnchor),e.bottomEdgeAnchor!==o.bottomEdgeAnchor&&(this._bottomEdgeAnchor=o.bottomEdgeAnchor),e.useLegacyTrajectory!==o.useLegacyTrajectory&&(this._useLegacyBottomAndRightAnchors=o.useLegacyBottomAndRightAnchors),e.relativeToOriginalWindowSize===o.relativeToOriginalWindowSize}doStepPreEvents(e){(this._oldDrawableX!==this.owner.getDrawableX()||this._oldDrawableY!==this.owner.getDrawableY()||this._oldWidth!==this.owner.getWidth()||this._oldHeight!==this.owner.getHeight())&&this._updateAnchorDistances(e),(this._parentOldMinX!==e.getUnrotatedViewportMinX()||this._parentOldMinY!==e.getUnrotatedViewportMinY()||this._parentOldMaxX!==e.getUnrotatedViewportMaxX()||this._parentOldMaxY!==e.getUnrotatedViewportMaxY())&&this._followAnchor(e)}_updateAnchorDistances(e){const o=a.staticArray(a.AnchorRuntimeBehavior.prototype.doStepPreEvents),r=e.getLayer(this.owner.getLayer());let s=this._parentOldMinX,t=this._parentOldMinY,d=this._parentOldMaxX,l=this._parentOldMaxY;this._hasJustBeenCreated&&(this._relativeToOriginalWindowSize?(s=e.getInitialUnrotatedViewportMinX(),t=e.getInitialUnrotatedViewportMinY(),d=e.getInitialUnrotatedViewportMaxX(),l=e.getInitialUnrotatedViewportMaxY()):(s=e.getUnrotatedViewportMinX(),t=e.getUnrotatedViewportMinY(),d=e.getUnrotatedViewportMaxX(),l=e.getUnrotatedViewportMaxY()));const w=(d+s)/2,p=(l+t)/2,f=d-s,E=l-t,h=this._relativeToOriginalWindowSize?[this.owner.getDrawableX(),this.owner.getDrawableY()]:this._convertInverseCoords(e,r,this.owner.getDrawableX(),this.owner.getDrawableY(),o);this._leftEdgeAnchor===1?this._leftEdgeDistance=h[0]-s:this._leftEdgeAnchor===2?this._leftEdgeDistance=h[0]-d:this._leftEdgeAnchor===3?this._leftEdgeDistance=(h[0]-s)/f:this._leftEdgeAnchor===4&&(this._leftEdgeDistance=h[0]-w),this._topEdgeAnchor===1?this._topEdgeDistance=h[1]-t:this._topEdgeAnchor===2?this._topEdgeDistance=h[1]-l:this._topEdgeAnchor===3?this._topEdgeDistance=(h[1]-t)/E:this._topEdgeAnchor===4&&(this._topEdgeDistance=h[1]-p);const g=this._relativeToOriginalWindowSize?[this.owner.getDrawableX()+this.owner.getWidth(),this.owner.getDrawableY()+this.owner.getHeight()]:this._convertInverseCoords(e,r,this.owner.getDrawableX()+this.owner.getWidth(),this.owner.getDrawableY()+this.owner.getHeight(),o);this._rightEdgeAnchor===1?this._rightEdgeDistance=g[0]-s:this._rightEdgeAnchor===2?this._rightEdgeDistance=g[0]-d:this._rightEdgeAnchor===3?this._rightEdgeDistance=(g[0]-s)/f:this._rightEdgeAnchor===4&&(this._rightEdgeDistance=g[0]-w),this._bottomEdgeAnchor===1?this._bottomEdgeDistance=g[1]-t:this._bottomEdgeAnchor===2?this._bottomEdgeDistance=g[1]-l:this._bottomEdgeAnchor===3?this._bottomEdgeDistance=(g[1]-t)/E:this._bottomEdgeAnchor===4&&(this._bottomEdgeDistance=g[1]-p),this._hasJustBeenCreated=!1}_followAnchor(e){const o=a.staticArray(a.AnchorRuntimeBehavior.prototype.doStepPreEvents),r=e.getLayer(this.owner.getLayer());let s=e.getUnrotatedViewportMinX(),t=e.getUnrotatedViewportMinY(),d=e.getUnrotatedViewportMaxX(),l=e.getUnrotatedViewportMaxY();const w=(d+s)/2,p=(l+t)/2,f=d-s,E=l-t;let h=0,g=0,A=0,m=0;this._leftEdgeAnchor===1?h=s+this._leftEdgeDistance:this._leftEdgeAnchor===2?h=d+this._leftEdgeDistance:this._leftEdgeAnchor===3?h=s+this._leftEdgeDistance*f:this._leftEdgeAnchor===4&&(h=w+this._leftEdgeDistance),this._topEdgeAnchor===1?g=t+this._topEdgeDistance:this._topEdgeAnchor===2?g=l+this._topEdgeDistance:this._topEdgeAnchor===3?g=t+this._topEdgeDistance*E:this._topEdgeAnchor===4&&(g=p+this._topEdgeDistance),this._rightEdgeAnchor===1?A=s+this._rightEdgeDistance:this._rightEdgeAnchor===2?A=d+this._rightEdgeDistance:this._rightEdgeAnchor===3?A=s+this._rightEdgeDistance*f:this._rightEdgeAnchor===4&&(A=w+this._rightEdgeDistance),this._bottomEdgeAnchor===1?m=t+this._bottomEdgeDistance:this._bottomEdgeAnchor===2?m=l+this._bottomEdgeDistance:this._bottomEdgeAnchor===3?m=t+this._bottomEdgeDistance*E:this._bottomEdgeAnchor===4&&(m=p+this._bottomEdgeDistance);const Y=this._convertCoords(e,r,h,g,o);let _=Y[0],c=Y[1];const M=this._convertCoords(e,r,A,m,o),W=M[0],X=M[1];if(this._useLegacyBottomAndRightAnchors)this._rightEdgeAnchor!==0&&this.owner.setWidth(W-_),this._bottomEdgeAnchor!==0&&this.owner.setHeight(X-c),this._leftEdgeAnchor!==0&&this.owner.setX(_+this.owner.getX()-this.owner.getDrawableX()),this._topEdgeAnchor!==0&&this.owner.setY(c+this.owner.getY()-this.owner.getDrawableY());else{if(this._rightEdgeAnchor!==0&&this._leftEdgeAnchor!==0){const b=W-_;this.owner.setX(this.owner.getX()===this.owner.getDrawableX()?_:_+(this.owner.getX()-this.owner.getDrawableX())*b/this.owner.getWidth()),this.owner.setWidth(b)}else this._leftEdgeAnchor!==0&&this.owner.setX(_+this.owner.getX()-this.owner.getDrawableX()),this._rightEdgeAnchor!==0&&this.owner.setX(W+this.owner.getX()-this.owner.getDrawableX()-this.owner.getWidth());if(this._bottomEdgeAnchor!==0&&this._topEdgeAnchor!==0){const b=X-c;this.owner.setY(this.owner.getY()===this.owner.getDrawableY()?c:c+(this.owner.getY()-this.owner.getDrawableY())*b/this.owner.getHeight()),this.owner.setHeight(b)}else this._topEdgeAnchor!==0&&this.owner.setY(c+this.owner.getY()-this.owner.getDrawableY()),this._bottomEdgeAnchor!==0&&this.owner.setY(X+this.owner.getY()-this.owner.getDrawableY()-this.owner.getHeight())}this._oldDrawableX=this.owner.getDrawableX(),this._oldDrawableY=this.owner.getDrawableY(),this._oldWidth=this.owner.getWidth(),this._oldHeight=this.owner.getHeight(),this._parentOldMinX=e.getUnrotatedViewportMinX(),this._parentOldMinY=e.getUnrotatedViewportMinY(),this._parentOldMaxX=e.getUnrotatedViewportMaxX(),this._parentOldMaxY=e.getUnrotatedViewportMaxY()}doStepPostEvents(e){}_convertCoords(e,o,r,s,t){return e!==e.getScene()?(t[0]=r,t[1]=s,t):o.convertCoords(r,s,0,t)}_convertInverseCoords(e,o,r,s,t){return e!==e.getScene()?(t[0]=r,t[1]=s,t):o.convertInverseCoords(r,s,0,t)}}a.AnchorRuntimeBehavior=D,a.registerBehavior("AnchorBehavior::AnchorBehavior",a.AnchorRuntimeBehavior)})(gdjs||(gdjs={}));
//# sourceMappingURL=anchorruntimebehavior.js.map
