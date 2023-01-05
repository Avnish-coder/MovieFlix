import React, { Component } from "react";
import "./Css/Banner.css";
import { movies } from "./MovieD";
export default class Banner extends Component {
  render() {
    let movie = movies.results[0];
    return (
      <>
        {
          // eslint-disable-next-line eqeqeq
          movie == "" ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className="card">
              <img
                src={movie.backdrop_path}
                className="card-img-top"
                alt={movie.title}
              />
              {/* <div className="card-body"> */}
                <h5 className="card-title card-tTitle">{movie.title}</h5>
                <p className="card-text card-TempText">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima in ab quidem! Animi ut hic quisquam aut facilis vel corrupti. Porro dolorum nostrum perferendis fuga minus expedita non quidem numquam.
                  Vero, amet. Inventore consequuntur aut vitae aliquid! Ab, vel dolorum ipsum itaque officia numquam maxime cum corrupti accusamus necessitatibus mollitia qui ut ullam repellat, enim alias quam, magnam optio sint?
                  Omnis, fuga fugit! Quisquam reprehenderit nostrum perferendis ipsum. Quisquam consequatur facilis dolores veritatis, praesentium placeat aspernatur, rerum dolorum aperiam, ipsa nisi similique natus ipsum tenetur earum eaque et magni odio.
                  Autem accusamus, tempora consectetur officia doloribus rerum reprehenderit molestiae voluptatum illum mollitia adipisci possimus temporibus sint placeat repellat saepe nulla, quos, odit minima? Reprehenderit maiores, suscipit consequuntur optio excepturi at.
                  Quos saepe quisquam officiis nobis dignissimos. Odio at veniam incidunt beatae quam doloribus ipsum voluptate modi, inventore excepturi repellat aliquid quia aperiam facilis ab a tempora. Laudantium necessitatibus nulla consequuntur.
                  Magni deserunt libero minima at maiores voluptates iste autem fugit voluptas dolore temporibus aperiam impedit dolorum ipsa quaerat sapiente, nihil quisquam explicabo blanditiis. Iusto exercitationem deserunt perferendis soluta sed dolorem?
                  Temporibus error, reprehenderit consectetur cum cumque quod alias sequi non sunt. Consequuntur quisquam quod sunt, id cumque impedit quos itaque cum incidunt soluta inventore repudiandae asperiores alias unde temporibus mollitia.
                  Distinctio, saepe voluptatum! Enim rerum obcaecati recusandae eaque repellat eveniet dignissimos? Excepturi, fugiat quaerat. Iusto aperiam hic a, ipsa, voluptatem ipsam quam, eligendi velit quidem animi qui. Cum, sequi harum.
                  Eius fugiat quia assumenda at laborum nisi beatae facere inventore, veniam perspiciatis nesciunt cum corporis facilis exercitationem vel, esse asperiores laudantium cupiditate eaque officiis quam nulla aut? Est, architecto explicabo.
                  Sint quibusdam atque natus consequatur illum! Voluptas provident saepe id quae ad quos consequatur harum atque libero rerum? Aliquid ullam quidem amet nostrum blanditiis repellendus voluptate animi iure, ipsum exercitationem!
                  Possimus suscipit similique officiis unde? Voluptatum sit voluptates aut nulla blanditiis repudiandae soluta minus nostrum distinctio, fuga ut dignissimos minima, repellendus omnis. Qui cumque sapiente consequuntur ab, iusto eos beatae?
                  Temporibus nemo itaque iure modi, repudiandae harum beatae ratione magni doloremque eligendi voluptatibus eum possimus illum iste necessitatibus architecto sint fugit facilis similique voluptatum officia nihil exercitationem atque. Accusamus, distinctio.
                  Molestiae repudiandae distinctio consequatur porro magnam molestias, reiciendis error quae. Incidunt quibusdam saepe distinctio eius aut reiciendis veritatis repudiandae iusto possimus ipsam id exercitationem, ad dolor, nostrum consequuntur veniam quisquam?
                  Cum, aliquid. Corporis laudantium nihil, laboriosam provident sunt perferendis adipisci neque? Veniam mollitia nesciunt minima ipsum eius dolore ab libero in reiciendis aut optio sint, eos quas reprehenderit? Eveniet, et!
                  Molestiae, labore? Voluptates architecto ipsa natus modi veritatis ipsam placeat possimus, totam illo harum ipsum laboriosam. Dolores inventore quae, tenetur repellendus esse totam quisquam, numquam cumque laudantium reiciendis distinctio exercitationem.
                  A suscipit magni perspiciatis. Explicabo consequatur ipsum dolorum atque reiciendis ad unde quo at voluptates? Ut ex sit quisquam neque dolor consectetur ullam quis doloribus. Distinctio laborum consequatur architecto voluptatem!
                  Facere est voluptatum quibusdam rerum consequatur doloribus fugit cupiditate architecto autem culpa assumenda, voluptatem soluta aut neque atque possimus perspiciatis earum, pariatur sit. Minima ducimus, ipsam nostrum sit nisi facilis.
                  Quo eaque ullam quibusdam animi, laborum, officiis sequi alias autem excepturi temporibus cum quas voluptatum ad ratione inventore mollitia? Et saepe ullam culpa, minima necessitatibus atque nisi labore eum eaque!
                  Voluptatem similique esse aperiam officiis id fuga accusamus vitae necessitatibus excepturi deserunt cupiditate temporibus inventore quisquam dolorem impedit incidunt, at suscipit minima. Suscipit possimus exercitationem magni praesentium. Blanditiis, commodi numquam.
                  Officiis fugiat eos reiciendis ducimus exercitationem itaque, quae maxime atque facilis praesentium veritatis eum repellendus ad? Ad laboriosam excepturi eius voluptate modi. Voluptatem nihil quasi soluta, explicabo labore eos rem?
                  Quibusdam consequuntur excepturi dolore, velit voluptate neque in, iure quam aperiam enim, quisquam ipsam magnam totam possimus vel ut laborum esse? Magnam, beatae id magni quo nobis deleniti iure earum?
                  Iusto magni laudantium atque aperiam veniam ex, vitae quos laboriosam harum dolorum ratione fuga. Iure a perferendis porro eaque corporis laborum non blanditiis rem pariatur quae? Quae totam deserunt accusamus!
                  Nesciunt velit ducimus molestiae. Iste eaque laudantium fugit enim cum, culpa veniam corporis inventore amet perferendis maxime corrupti dicta quae consequatur. Error odit voluptate at possimus adipisci autem laboriosam. Eius!
                  Enim adipisci nisi libero quae totam ullam, consequatur fuga autem facere eveniet praesentium molestiae, porro delectus eaque aut exercitationem, itaque minus. At, modi! Vitae nostrum assumenda explicabo laborum. Amet, eum!
                  Aspernatur atque laboriosam quod est similique necessitatibus amet a, voluptatum facere sapiente dolorem eos dicta unde mollitia quae. Perferendis quae neque ex sit qui itaque cumque, aliquam nobis! Sequi, ipsa.
                  Ad ratione praesentium, earum modi blanditiis laborum? Nisi aut incidunt, sapiente autem nam totam perspiciatis illo neque iste fugit veniam voluptates voluptatibus debitis eius laudantium commodi. Illum, porro laborum! Corporis.
                  Reprehenderit vitae earum sed quisquam commodi placeat deserunt ipsum illum repellendus vero! Tenetur non suscipit nulla odit. Suscipit ea, fugiat temporibus eveniet explicabo assumenda et qui sapiente. Amet, laudantium qui!
                  Atque maxime alias nisi molestiae facilis odit sint dolorum illo ipsum aut blanditiis et, consectetur natus mollitia impedit qui cum iure itaque repudiandae quasi est animi nobis similique obcaecati? Nobis?
                  At et quibusdam recusandae quia autem laboriosam quidem iure esse vero non, ex molestiae quos eius nostrum. Quos excepturi voluptate quidem culpa earum harum accusantium illo aspernatur, adipisci autem sint.
                  Earum, inventore aperiam neque optio dicta iusto amet harum ex deserunt obcaecati asperiores voluptates. Dolor suscipit ex similique magni magnam commodi laborum. Odio, ex ipsam nesciunt similique doloribus aspernatur eius.
                  Cumque repudiandae iure explicabo voluptas sit esse amet, nulla ipsa perspiciatis? Aspernatur maiores dolor repellendus! Velit iusto laudantium quam quo quia rerum nesciunt, consectetur consequuntur debitis, perspiciatis maxime nulla dolorem?
                  Nihil amet eligendi labore possimus vitae at, illo nesciunt reiciendis ipsum aperiam a cupiditate, et vero dolorem eum quae corrupti voluptatum delectus itaque provident. Suscipit nam aliquid atque deserunt voluptatum.
                  Facilis, ratione. Accusantium quam, et voluptas aut tempore libero nihil tenetur voluptate. Vitae eius debitis, recusandae, beatae natus quas temporibus quos laboriosam provident praesentium, fuga dolores hic eum! Exercitationem, sapiente.
                  Natus officiis nesciunt, odit veniam dicta laborum! Nesciunt ratione asperiores alias animi ea corrupti adipisci ipsum deserunt minima ipsam, doloribus aliquam cupiditate officiis sapiente pariatur eius id harum! Provident, nisi.
                  Eum officia, neque quia officiis velit ad sunt non fugit unde dicta dolore, inventore a voluptatem illo ipsum aliquid saepe perspiciatis eveniet laborum amet similique possimus voluptatum omnis? Accusantium, aperiam?
                  Cupiditate voluptates beatae officia assumenda ducimus aperiam reiciendis, non libero, voluptas minima cum modi praesentium error et hic atque culpa? Consectetur odio eaque nostrum excepturi mollitia. Nisi ut earum voluptates.
                  Dolores, deserunt quasi. Officiis quis ex porro possimus mollitia voluptate necessitatibus minima iure sit, at maxime doloribus suscipit magnam officia veritatis tempore nam libero nisi perferendis? Totam quisquam blanditiis molestiae.
                  Ab eveniet atque similique fuga dolor aspernatur, optio harum. Explicabo dolorum repellat fugiat reprehenderit quia delectus ut quae doloribus, velit molestias consequuntur iusto! Cupiditate a dolorum, velit soluta atque officia!
                  Quaerat necessitatibus dolores tempora esse doloribus. Numquam nemo quibusdam, quis obcaecati sed suscipit non veniam aliquam eius odit possimus doloribus quae eaque earum deserunt? Commodi consequuntur impedit neque corrupti reiciendis?
                  Sint recusandae dignissimos, iusto esse asperiores dicta similique enim at facilis reiciendis porro eos ipsam non id alias repellat, soluta aliquid iste perspiciatis ducimus. Sapiente aliquid iure ipsum iste harum!
                  Molestiae, laborum error iure laudantium sapiente quibusdam eos quisquam qui vel illum, ut iste deleniti mollitia harum dolorem? Debitis illo ipsum voluptates laudantium possimus harum voluptatem nihil earum magnam modi?
                  Cupiditate delectus nihil magnam voluptatem velit, corporis accusamus officiis, consequuntur sit amet, sequi quaerat. Tempora consequuntur in ad, ullam aut a. Officia consectetur quo possimus sed dolorum placeat voluptatum neque!
                  Facilis commodi, corporis ea dolor ad quia, maiores nisi, tempore voluptas aperiam aliquid praesentium eum libero consectetur vero eos! Laboriosam error molestiae suscipit saepe dolorem aliquam quo et, cumque maxime.
                  Iure similique rem voluptatibus fuga sed ipsam dolor deserunt reprehenderit magnam. Corporis velit, expedita vitae est reprehenderit nesciunt distinctio, enim facilis dignissimos quia ducimus provident odit autem quibusdam sint incidunt?
                  Quaerat qui similique consectetur assumenda dignissimos neque necessitatibus suscipit illo ipsum earum quis aspernatur at vel ipsam, ipsa odio nostrum officiis, distinctio fuga, dicta cum. Labore itaque tempora ullam quasi.
                  At, hic. Sequi quae alias inventore dolorem enim at laborum sint earum, est praesentium soluta neque vitae quisquam voluptates quod ad corporis pariatur assumenda, doloremque similique eos voluptas odit dignissimos.
                  Voluptates temporibus qui ad dolorum, iure neque nulla in aliquam illo culpa perspiciatis eos, vero sequi, explicabo voluptatibus sunt. Sint quaerat quae sed possimus adipisci omnis totam inventore voluptas dolore?
                  Ut enim praesentium quod laudantium a accusantium, reiciendis alias hic beatae architecto mollitia dolorem quo vel voluptatibus nisi, quidem esse optio. A itaque atque veniam dolor veritatis molestias ut est.
                  Iste quam at aperiam distinctio quia blanditiis perferendis repellat quae eos hic esse inventore reiciendis quod neque, voluptatum sapiente illo consequuntur dolor architecto rerum. Distinctio accusantium necessitatibus inventore officia ullam?
                  Ratione voluptatum totam illo alias eius pariatur earum, laborum quia maxime, porro saepe voluptatibus! Quia dolor quasi vero vitae laborum deserunt. Ducimus dolore repellat aspernatur, vitae vero repudiandae in commodi.
                  Dolores mollitia assumenda modi qui sit commodi error vero quaerat reiciendis minus? Quo veniam repellendus facilis ullam tempore, nobis qui itaque, dolorem voluptates expedita, corrupti at maiores temporibus nihil modi!
                  Aut, in dignissimos velit ipsam itaque perspiciatis enim iste omnis, maxime, est eligendi laborum odit culpa natus aliquam beatae? Possimus inventore quod ratione laudantium labore. Corrupti sit quia cum blanditiis?
                  Ipsum commodi quod dicta placeat atque iste excepturi obcaecati provident! Vitae, facilis sapiente. Dolores saepe iusto sed asperiores esse repellendus error velit tempora vitae quidem placeat, rerum ducimus a aperiam.
                  Magni aut velit voluptates odio facere aliquam necessitatibus asperiores, blanditiis quasi accusantium earum nihil id voluptas ratione qui porro eius suscipit dolorem tenetur praesentium. Omnis quo nisi deserunt dolorum harum.
                  Quam adipisci veniam, in est iusto, doloribus tempora esse, itaque explicabo reiciendis enim dolores perferendis ut culpa? Laboriosam quia voluptates dolorum cupiditate, quae quos quod pariatur quo, porro, libero natus?
                  Repellat iure voluptatum repellendus iste alias id voluptatibus, corporis facilis perspiciatis sint, eveniet eum odit vel consequuntur soluta architecto necessitatibus rem aliquam, commodi nemo. Ullam at quidem sequi beatae nihil.
                  Dolores magnam eum quod fugiat aut ex officia et ad numquam nam debitis hic exercitationem harum dolorum saepe quas nostrum quibusdam repellendus provident nobis, corporis laborum, facere animi doloribus. Sequi!
                  Necessitatibus, sunt nisi! Velit ipsum quaerat sunt est perferendis rem placeat vero consectetur repudiandae! Nostrum quo quasi reiciendis voluptatum fugit laborum ipsam quisquam adipisci velit? Quibusdam blanditiis odit labore unde.
                  Nostrum minus, consequatur itaque corporis esse aliquam accusamus nihil! Quisquam fugit, quia soluta quam atque repellat accusamus odit cumque natus velit tenetur, nostrum neque eius? Minus explicabo quae consectetur optio!
                  Dolor quas ipsa tempore doloremque saepe, eum, dolorum voluptates voluptas aspernatur distinctio nemo ab rerum molestias rem sequi exercitationem at! Magnam in debitis suscipit nostrum. Totam ut repudiandae similique modi.
                  Dignissimos a asperiores ducimus odit repudiandae error quisquam pariatur beatae eveniet dolorum! Earum tenetur architecto, asperiores exercitationem recusandae harum consectetur laudantium excepturi sint, autem dolores officiis nulla ratione possimus sapiente?
                  Impedit dolores facere suscipit, nihil sed, maiores qui voluptatibus obcaecati libero veniam aspernatur ducimus earum! Officiis doloribus nihil aperiam illum, dignissimos, ipsam quo odit eius corrupti magnam modi consectetur pariatur?
                  Accusamus maiores quae accusantium veniam perspiciatis, tempora enim alias soluta. Officia quo fugiat provident ad tempora rerum distinctio in a praesentium libero quisquam enim tenetur, dolores nobis nisi. Cumque, minus.
                  Laborum, modi enim rem, facilis deserunt incidunt vitae magnam aspernatur et, ipsa quae quaerat. Magni pariatur voluptate aut odio qui architecto, adipisci atque tempora inventore quia soluta, accusantium impedit magnam!
                  Natus sequi iure assumenda aliquid eius iste veniam esse cupiditate, sed doloribus omnis doloremque, minus tempora perferendis accusamus temporibus consectetur facilis ut quam suscipit excepturi, rem et! Veritatis, nisi quod?
                  Fugiat ducimus vitae aut quas. Alias aliquid id accusamus adipisci, eos dolores amet aspernatur eveniet quos! Cum iure neque sed repudiandae harum consequuntur, minus saepe error perferendis vero nemo mollitia.
                  Esse nemo numquam nobis accusantium harum unde sint atque, explicabo soluta minus, amet cumque voluptates qui eligendi quaerat non? Suscipit necessitatibus deleniti aliquam, odio tempore illum nihil aliquid neque tenetur.
                  Omnis, esse! Sed magni nisi quae, placeat nihil tempore asperiores illo exercitationem omnis nemo corrupti laudantium consectetur aliquam architecto velit magnam, consequuntur nobis, facere recusandae non vero. Et, nemo iusto.
                  Harum facere sed, vero animi aliquid iure nisi tempore at eos, iusto consequatur, quasi error et voluptas sit alias porro! Magnam porro nostrum vel odit ad! Maiores ipsum maxime sint!
                  Repellendus et harum, mollitia delectus suscipit dicta, odit veniam hic tenetur, sit excepturi dignissimos quam vero. Sed laboriosam quaerat ducimus fugiat! Earum qui perferendis porro distinctio dolore quisquam, aspernatur alias?
                  Sed itaque nesciunt alias labore, repellendus possimus blanditiis, recusandae ullam fugiat dolorum fugit sunt voluptas asperiores ratione obcaecati nam ducimus autem cum provident! Quis distinctio perspiciatis excepturi alias quam eius.
                  Quo architecto praesentium perferendis totam quae fugit expedita, reiciendis reprehenderit aliquid libero quas at perspiciatis eius nemo sequi, necessitatibus velit mollitia placeat. Quas debitis eaque sunt dolor, vitae aperiam porro.
                  Doloribus esse, pariatur ex cupiditate expedita architecto explicabo doloremque quia excepturi. Natus accusamus sint quo suscipit ipsam quis repellendus perferendis, architecto voluptates in doloribus voluptate quam illo vitae officia mollitia.
                  Iure quia inventore magni, voluptas aliquid natus reprehenderit dicta velit illum, assumenda ipsa? Ea quibusdam voluptates, corporis sequi consequuntur, necessitatibus totam, tenetur animi hic quis nostrum? Quis magni porro quisquam!
                  Ratione tenetur facilis fugiat eveniet deserunt aliquid quos illo sapiente veniam ullam ipsa eius, molestias quo earum, similique iste! Rerum optio repellendus fugit vero voluptates magnam, impedit quasi fuga distinctio?
                  Doloremque fugiat, eveniet nam eos repudiandae recusandae impedit exercitationem cumque. Soluta accusamus tenetur, corporis, necessitatibus explicabo possimus iste quam maxime voluptatibus neque voluptatem animi esse reiciendis eos! Eaque, repellendus harum!
                  Officiis aperiam ipsam qui. Eos at officia incidunt ullam temporibus expedita vel. Exercitationem perspiciatis ut rem commodi molestias alias molestiae ea voluptates aliquid consequuntur, doloribus tempora odit illum fugiat? Deserunt?
                  Veritatis, cum cumque deserunt quia necessitatibus et ratione culpa, maxime ad aspernatur quasi numquam quas vero nulla qui velit ab voluptatem dolores in rerum debitis. Nemo sunt dolores perspiciatis nihil!
                  Sunt, perspiciatis at, sit nam odit soluta quod magni eveniet rerum quis commodi adipisci! Quae labore, magnam natus aperiam atque quam dignissimos deleniti quasi quia animi numquam possimus nostrum tenetur?
                  Eum dignissimos illum incidunt officiis dolore voluptatum esse velit doloribus vitae rerum? Ullam cupiditate at porro! Quo quis quod nisi illum perspiciatis nam cumque, ipsam laborum sunt animi ipsum molestiae?
                  Sed excepturi sint laboriosam atque nulla nostrum harum veritatis corrupti laborum qui. Nisi delectus eos non sunt? Maiores quae nam veniam. Minima saepe eaque quia dolor quisquam placeat obcaecati vitae?
                  Temporibus provident pariatur, sit nostrum voluptatem saepe maxime quod, consequuntur ut blanditiis eius ullam! Corrupti similique aperiam cumque dolores eveniet ex, laboriosam, ipsam ut accusamus a tenetur voluptates distinctio repellendus!
                  Exercitationem veritatis beatae velit ad debitis, iure cupiditate illo consequatur temporibus laboriosam repudiandae quidem at maxime sequi quo fugiat, perferendis porro dolorum quae architecto vel provident. Totam officia repellat soluta!
                  Fuga, cupiditate. Quisquam repellat consectetur corporis quos maiores, animi voluptatem mollitia consequatur quam repellendus? A nisi explicabo ea, odit dolorem provident veritatis atque quod perspiciatis dolore reiciendis, fugiat nobis nesciunt.
                  Libero quidem iusto corporis culpa suscipit non dignissimos neque officiis voluptatum incidunt ipsa similique, magnam expedita praesentium, quibusdam reiciendis obcaecati inventore ad dolor earum, aspernatur eius in temporibus. Molestias, velit.
                  Asperiores dicta praesentium libero facere nemo fugit numquam labore, corrupti blanditiis, est laboriosam et, eveniet possimus temporibus. Dicta dolorum provident reprehenderit? Nesciunt minus quo laudantium labore, aperiam natus quod odit.
                  At ab corrupti nemo nulla exercitationem alias rerum facere deleniti animi pariatur, eius qui ullam cumque assumenda facilis necessitatibus iure esse laboriosam. Repellendus voluptatibus, porro corrupti consequatur itaque rerum repellat.
                  Dolor reiciendis eaque a maiores laborum aut dicta? Sed quisquam ad ipsa doloribus numquam impedit obcaecati hic ducimus totam quam culpa, beatae odit. Sint illo explicabo ex nam nesciunt unde!
                  Facere, laudantium explicabo exercitationem animi sequi fugit unde alias necessitatibus ad optio consectetur iure itaque quisquam adipisci nostrum amet atque, iste officia aut odio officiis possimus soluta? Suscipit, voluptates sequi.
                  Deserunt neque sint cumque corporis totam. Maiores placeat eligendi cupiditate natus necessitatibus, corporis assumenda incidunt quisquam earum illo maxime, laboriosam voluptas rem nobis hic! Inventore sint quis doloremque quisquam vel?
                  Temporibus nemo harum dolor ea cumque, nihil accusantium molestias alias facere odit ipsa tempora corporis vel! Cum aspernatur est accusamus, quidem odio dolor asperiores perferendis repellendus, commodi atque ipsam neque.
                  At recusandae, mollitia ut odit fugiat placeat doloremque magni illo itaque omnis, repellendus unde ea molestias, incidunt cumque officia maxime est consequuntur modi beatae alias dolor! Atque accusamus necessitatibus suscipit.
                  Sunt nobis placeat provident animi, ex iusto corrupti voluptate ullam non doloribus hic id consectetur aspernatur rem autem, voluptas illum sed, odio excepturi nesciunt saepe. Sapiente ducimus autem aliquid suscipit?
                  Ea error temporibus impedit mollitia, a similique voluptatem itaque excepturi earum sint quos eius incidunt minima corporis porro modi consequatur vitae? Similique minus eaque amet dignissimos hic, alias et nobis.
                  Enim, consectetur adipisci alias eius quos cupiditate nihil iusto dolorum minus eum exercitationem odio molestiae, hic necessitatibus nemo consequatur quo culpa quia ipsam eos voluptatibus maxime dolorem fugit! Eveniet, saepe.
                  Eveniet nobis exercitationem repellat, explicabo odit ratione aut laborum soluta, fugiat nemo iusto similique nihil. Obcaecati dignissimos praesentium beatae nemo! Odit autem suscipit at aliquam fugit consequuntur rerum impedit. Dolores.
                  Nam facere, velit unde optio numquam sapiente. Dignissimos inventore velit labore est quos modi, vero, fugiat repudiandae a at consectetur tempora dolorem, maiores non accusamus nobis facilis dolorum mollitia? Culpa!
                  Sed impedit natus voluptatibus illo rerum accusamus, voluptates debitis modi consequatur, facilis quae? Distinctio beatae aliquid tempore ut corrupti saepe. Velit quia libero recusandae tempore corporis. Commodi, vero. Veniam, nihil.
                  Soluta esse eveniet, totam magni ratione repellendus suscipit vel cum molestias velit dicta sunt. Consequuntur recusandae molestiae atque maxime nesciunt, deserunt id doloribus commodi nulla? Perspiciatis maxime quo dicta voluptatem.
                  Nihil unde iure beatae cumque voluptatibus reprehenderit fuga? Minima libero laboriosam corrupti fugiat voluptatem, odio consequuntur doloremque qui consectetur delectus rem similique. Illo, dolorem! Numquam consequuntur eveniet cumque eaque in.
                </p>
                {/* <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            // </div>
          )
        }
      </>
    );
  }
}
