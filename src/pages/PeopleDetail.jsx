import ImageComponent from "@components/ImageComponent";
import Loading from "@components/Loading";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import useFetch from "@hooks/useFetch";
import { GENDER_MAP } from "@libs/constant";

import React from "react";
import { useParams } from "react-router-dom";

const PeopleDetail = () => {
  const { id } = useParams();
  const { data: peopleInfor, loading } = useFetch({
    url: `/person/${id}?append_to_response=combined_credits`,
  });

  return (
    <div className="bg-black text-[1.2vw] text-white">
      <div className="container">
        <div className="flex-1">
          <ImageComponent
            src={
              peopleInfor?.profile_path &&
              `https://image.tmdb.org/t/p/original${peopleInfor?.profile_path}`
            }
            width={600}
            height={900}
            className="mb-6"
          />
          <div>
            <p className="mb-6 text-[1.3vw] font-bold">Personal Information</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Know For Department</p>
                <p>{peopleInfor.known_for_department}</p>
              </div>
              <div>
                <p className="font-bold">Gender</p>
                <p>{GENDER_MAP[peopleInfor.gender]}</p>
              </div>
              <div>
                <p className="font-bold">Place of birth</p>
                <p>{peopleInfor.place_of_birth}</p>
              </div>
              <div>
                <p className="font-bold">Brithday</p>
                <p>{peopleInfor.birthday}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <p className="mb-6 text-[2vw] font-bold">{peopleInfor.name}</p>
          <div className="mb-6">
            <p className="mb-4 text-[1.4vw] font-bold">Biography</p>
            <p className="whitespace-pre-line">{peopleInfor.biography}</p>
          </div>
          <RelatedMediaList
            title="Know For"
            mediaList={peopleInfor?.combined_credits?.cast || []}
          />
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default PeopleDetail;
