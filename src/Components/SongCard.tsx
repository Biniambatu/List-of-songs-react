import React from "react";
import { props } from "../service/Api";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import logo1 from "../assets/itunes.png";

interface Song {
  song: props;
}
const SongCard = ({ song }: Song) => {
  return (
    <Card>
      <CardBody >
        <Image src={logo1} boxSize={10}></Image>
        <Heading fontSize={"1xl"}>{song.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default SongCard;
