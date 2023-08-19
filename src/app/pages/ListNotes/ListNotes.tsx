import { FC } from 'react';

interface IListNotes {}

const tagList = ['All', 'Groceries', 'College', 'Payments'];

const notes = [
    {
        id: 0,
        tag: 'Uncategorized',
        title: 'Get a new helmet',
    },
];

export const ListNotes: FC<IListNotes> = () => {
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center px-32  ">
            <div className=" grid grid-cols-4 w-full rounded-lg px-12 bg-white  ">
                {/* sidebar */}
                <div className="col-span-1 pl-12 py-4 pt-36">
                    <div className="flex flex-col gap-6 pb-20">
                        {tagList.map((tag) => (
                            <div
                                className={`text-xl   leading-normal  ${
                                    tag === 'All' ? 'text-red-500 font-bold' : 'text-[#525252] font-normal '
                                } `}
                            >
                                {' '}
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                {/* main section */}
                <div className="col-span-3 pl-12 py-4 pr-11 border-l border-[#D8D8D8]">
                    <div className="mt-8">
                        <h3 className="text-3xl leading-none  font-bold pl-1">All Tasks</h3>
                        {/* add note form */}
                        <div className="mt-6">
                            <form>
                                <input
                                    className="bg-[#F3F3F3] w-full outline-none rounded-lg px-6 py-3 placeholder:text-lg placeholder:leading-normal placeholder:font-normal placeholder:text-[#B5B5B5] caret-[#EA5959] caret- "
                                    type="text"
                                    placeholder="Add a new task inside ‘All’ category"
                                    name="newtask"
                                />
                            </form>
                        </div>

                        {/* notes */}
                        <div className="mt-8">
                            {notes.map((note) => (
                                <div className="flex gap-4 items-center group pl-1" key={note.id}>
                                    <div className="text-lg leading-normal font-normal text-[#5A5A5A]">
                                        {note.title}
                                    </div>
                                    <div className="text-white text-xs leading-normal font-normal bg-[#EA5959] py-1 !w-28 flex justify-center rounded ">
                                        {note.tag}
                                    </div>
                                    <div className="hidden cursor-pointer ml-auto group-hover:block">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="18"
                                            viewBox="0 0 16 18"
                                            fill="none"
                                        >
                                            <path
                                                d="M5.66667 3.33333L6.25 1H9.75L10.3333 3.33333M15 3.33333H2.16667L3.33333 17.3333H12.6667L13.8333 3.33333H1H15ZM8 6.83333V13.8333V6.83333ZM10.9167 6.83333L10.3333 13.8333L10.9167 6.83333ZM5.08333 6.83333L5.66667 13.8333L5.08333 6.83333Z"
                                                stroke="#FF0000"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
