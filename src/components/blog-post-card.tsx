import React from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";


interface BlogPostCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  author: { name: string; img: string };
  date: string;
}

export function BlogPostCard({
  img,
  tag,
  title,
  desc,
  author,
  date,
}: BlogPostCardProps) {
  return (
    <Card placeholder=""
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined} shadow={true}>
      <Card placeholder=""
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined} >
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full scale-110 object-cover"
        />
      </Card>
      <Card placeholder=""
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined} className="p-6">
        <Typography placeholder=""
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined} variant="small" color="blue" className="mb-2 !font-medium">
          {tag}
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          as="a"
          href="#"
          variant="h5"
          color="blue-gray"
          className="mb-2 normal-case transition-colors hover:text-gray-900"
        >
          {title}
        </Typography>
        <Typography placeholder=""
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined} className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <div className="flex items-center gap-4">
          <Avatar placeholder=""
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            size="sm"
            variant="circular"
            src={author.img}
            alt={author.name}
          />
          <div>
            <Typography placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant="small"
              color="blue-gray"
              className="mb-0.5 !font-medium"
            >
              {author.name}
            </Typography>
            <Typography placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant="small"
              color="gray"
              className="text-xs !text-gray-500 font-normal"
            >
              {date}
            </Typography>
          </div>
        </div>
      </Card>
    </Card>
  );
}


export default BlogPostCard;