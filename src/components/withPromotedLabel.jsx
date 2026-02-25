// eslint-disable-next-line no-unused-vars
export function withPromotedLabel(Card) {              //Promoted=withPromotedLabel(Card)  receive below comp return()=>
  return (props)=> {                                        // <-- props received here
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs rounded z-10">
          Promoted
        </span>

        <Card {...props} />
      </div>
    );
  };
}

