interface IRect {
    readonly id: string;
    color?: string;         //? - значить необязательное
    size: {
        width: number;
        height: number;
    }
}

const rect1: IRect = {
    id: "123",
    size: {
        width: 12,
        height: 12
    }
};
rect1.color = "blue";

const rect2 = {} as IRect;
const rect3 = <IRect>{};

//======================

interface IRectWithArea extends IRect{
    getArea: () => number;
}

const rect5: IRectWithArea = {
    id: "123",
    size: {
        width: 12,
        height: 12
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
};

//=======================
interface IClock {
    time: Date,
    setTime(date: Date):void
}
class Clock implements IClock{
    time: Date = new Date();

    setTime(date: Date): void {
        this.time = date;
    }
}
/*const clock: IClock = {
  time: new Date(),
  setTime(date: Date): void {
      this.time = date;
  }
};

const clock2: Clock = {
    time: new Date(),
    setTime(date: Date): void {
        this.time = date;
    }
};*/
//========================
interface IStyles {
    [key: string]: string;            //так указываем когда много однотипных свойств, чтобы не писать все
}

const css: IStyles = {
    border: "1px solid black",
    margin: "2px"
};
