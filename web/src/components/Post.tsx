import React from "react";

export default function Post() {
  return (
    <div className="POST flex max-w-post items-stretch gap-2 rounded-lg border border-black bg-white p-2">
      <div className="POSTER flex h-full flex-col place-content-center content-around self-center">
        <img
          src="/user.png"
          alt="pfp"
          className="min-w-12 max-w-32 min-h-12 max-h-32 grow rounded-full"
        />
        <div>@UserWITH REALLY LONG NAME</div>
      </div>
      <div className="TEXT grow self-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        lorem sem. Cras fringilla non ex non auctor. Nullam tristique felis
        sagittis mi luctus, varius eleifend elit rutrum. Morbi vel nibh nec
        nulla fringilla varius eu id massa. Maecenas turpis neque, porta et
        semper at, volutpat in velit. Donec iaculis porta lobortis. Praesent est
        sem, efficitur quis tristique dignissim, ultrices quis ligula. Vivamus
        finibus justo nec rutrum vestibulum. Integer ac purus semper, venenatis
        massa ac, cursus metus. Maecenas nisl erat, varius eget pulvinar ut,
        posuere dapibus lorem. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Sed blandit enim ut porta
        mollis. Proin tempus ut sapien vitae viverra. Morbi sodales purus vel
        purus vestibulum efficitur. Donec scelerisque turpis risus, eget maximus
        ipsum molestie vel. Sed accumsan sem tellus, id suscipit odio faucibus
        ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Sed at enim sit amet augue fermentum ultrices
        tempor eu ex. Vestibulum dictum lacus vel eros dignissim rutrum.
        Pellentesque nec mauris ex. Sed cursus nunc enim, eget sodales nibh
        consequat a. Etiam tincidunt, odio sed luctus vestibulum, lacus nisl
        pellentesque sapien, non sodales enim leo fermentum tellus. Maecenas ex
        ante, volutpat porttitor erat ac, vestibulum luctus purus. Cras finibus
        ullamcorper eleifend. Cras id nisi orci. Etiam quis mauris faucibus,
        molestie nunc quis, luctus ligula. Aliquam eros ipsum, placerat vitae
        varius eu, imperdiet nec orci. Donec sit amet orci a quam mattis
        efficitur in sed ante. Ut consectetur dui nec nisl semper maximus. Nunc
        eleifend lacus nec dignissim finibus. Donec sed augue eget nunc feugiat
        pretium. Etiam luctus mi sit amet lobortis placerat. Vestibulum suscipit
        id felis nec vehicula. Cras ut vestibulum nulla. Ut tincidunt ante ac
        ipsum mattis, eget aliquet risus gravida. Proin facilisis nisi et
        malesuada fringilla. Sed vitae suscipit lectus, in fermentum enim.
        Aenean ullamcorper dui vitae massa consectetur posuere. Vestibulum
        accumsan fringilla bibendum. In sed purus vel ligula sollicitudin congue
        sed nec velit. In hac habitasse platea dictumst. Sed id odio a elit
        feugiat venenatis. Phasellus ac aliquam metus. Praesent in feugiat diam.
        Ut egestas erat sit amet urna placerat, at ultricies lectus luctus.
        Mauris vitae nisl eros. Morbi mattis nibh nec dolor porta volutpat.
        Vivamus id mauris molestie, blandit metus vitae, viverra eros. Proin
        maximus, ipsum ut consequat tristique, sapien nulla laoreet ex, eu
        rhoncus felis mauris condimentum quam.
      </div>
      <div className="INTERACTIONS grid h-32 grid-flow-row place-content-center content-around self-center">
        <div>1222</div>
        <div>2</div>
      </div>
    </div>
  );
}
