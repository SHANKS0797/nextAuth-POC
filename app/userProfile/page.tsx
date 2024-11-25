import { auth } from "@/auth";
import EmptyPage from "@/components/EmptyPage";
import { toSentenceCase } from "@/utils";
import { getCustomerDetails, userDetails } from "../actions/auth";
import { PiIdentificationCardLight } from "react-icons/pi";
import { MdContactMail } from "react-icons/md";

export default async function ProtectedPage() {
  const session = await auth();
  if (!session) {
    return <EmptyPage />;
  } else {
    const data: Awaited<userDetails> = await getCustomerDetails(
      session.user.id
    );
    return (
      <div className="flex flex-col justify-center items-center w-full p-4 gap-3">
        {/* -------------------- USER NAME, EMAIL & PROFILE IMAGE -------------------- */}
        <div className="flex flex-row justify-start items-center w-full gap-3">
          {/* -------------------- PROFILE IMAGE -------------------- */}
          <img
            src={data.profilePhoto}
            height={150}
            width={150}
            alt={`${data.firstName}`}
            className="rounded-full"
          />
          {/* -------------------- USER NAME -------------------- */}
          <div className="flex flex-row justify-start items-center gap-0.5 text-primary font-semibold">
            <PiIdentificationCardLight size={28} color="#181818" />
            <p>{toSentenceCase(data.firstName + " " + data.lastName)}</p>
          </div>
          {/* -------------------- PROFILE IMAGE -------------------- */}
          <div className="flex flex-row justify-start items-center gap-0.5 text-primary font-semibold">
            <MdContactMail size={24} color="#181818" />
            <p>{data.emailId}</p>
          </div>
        </div>
        {/* -------------------- HELPER TEXT -------------------- */}
        <div className="w-full text-left leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam
          laudantium iure, mollitia facilis quos perspiciatis, velit ducimus hic
          dicta, animi error nesciunt asperiores. Iusto at dolorem consequatur
          reprehenderit sint. Obcaecati commodi voluptatum, aperiam vero
          deleniti eius ex delectus non rem nemo placeat quos blanditiis nisi
          odit quia facilis repellendus debitis? Voluptatibus, dignissimos sequi
          id voluptate quibusdam cupiditate voluptatem soluta? Sapiente numquam
          fugiat sit aliquid error mollitia ipsum, corporis, dolor, totam ullam
          beatae laudantium consectetur? Aperiam dolores debitis enim dolor
          doloremque, similique eum sapiente natus eligendi tempore itaque
          ducimus dicta! Minima similique porro accusamus possimus doloremque
          cumque in cum maiores at eaque doloribus modi eius aperiam nostrum,
          aliquam odit nemo soluta perferendis earum sunt! Aliquid suscipit eum
          quae? Dignissimos, sed!
        </div>
        <div className="w-full text-left leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi,
          velit molestias non temporibus quis placeat quaerat quia? Soluta, ut
          repellat vitae dolorum commodi suscipit cumque recusandae harum
          reprehenderit unde! Placeat sequi beatae, quo veritatis natus
          perferendis soluta omnis nostrum, excepturi facere officiis in
          distinctio voluptas et accusantium laborum maiores hic blanditiis
          culpa necessitatibus autem optio quae. Cupiditate, saepe adipisci?
          Minus suscipit ducimus ab excepturi accusantium dolores eum sapiente
          inventore dolorum quasi expedita perspiciatis, fugit assumenda eos
          dicta sunt eligendi labore temporibus? Unde beatae sit architecto
          ullam, dolor id porro.
        </div>
        <div className="w-full text-left leading-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
          dolores voluptates temporibus quam eaque, dolor fugit cum qui sapiente
          iusto beatae ipsam corrupti numquam doloribus alias cupiditate nostrum
          quidem nam. Eligendi debitis dolorum numquam laudantium, sapiente ea
          tempore doloribus? Laboriosam fugit voluptas, blanditiis, voluptatum
          minus molestiae itaque corrupti quam esse possimus porro sed est neque
          quae libero unde? Nihil, quod! Similique cupiditate perspiciatis nihil
          magni ex quam beatae repellendus amet officia. Perspiciatis facilis
          animi blanditiis assumenda sequi cumque placeat vero libero itaque
          asperiores. Nobis ipsum modi ex, quod a quo? Autem laudantium quaerat
          sequi nobis minus distinctio optio consectetur sed et, dicta molestias
          repellendus asperiores non quos dolores ad assumenda voluptates error
          quisquam cum neque recusandae sit vero? Similique, mollitia?
          Voluptatum exercitationem vitae fugiat consequuntur soluta enim autem
          at, quo ut delectus? Consectetur obcaecati optio aliquid fugiat, odio
          sed aliquam laboriosam, sapiente eveniet esse hic dignissimos
          assumenda atque, minima quo. Quia, accusamus vero molestias architecto
          praesentium nobis voluptatem in. Voluptatum ducimus necessitatibus
          officiis inventore sed cupiditate doloribus accusamus exercitationem
          animi impedit? Cupiditate magni ipsum explicabo obcaecati accusamus
          assumenda necessitatibus vero. Exercitationem quaerat mollitia,
          commodi saepe distinctio possimus, neque, dolores maxime officia alias
          non repudiandae blanditiis error! Exercitationem, optio est aut
          asperiores suscipit totam quibusdam dolores sit nobis doloremque
          architecto facilis!
        </div>
      </div>
    );
  }
}
