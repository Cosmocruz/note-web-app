import { FC } from 'react';

interface IListNotes {}

export const ListNotes: FC<IListNotes> = () => {
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center px-40  ">
            <div className=" grid grid-cols-4 w-full rounded-3xl px-12 py-4 bg-white  ">
                <div className="col-span-1"> tags </div>
                <div className="col-span-3"> notes </div>
            </div>
        </div>
    );
};
