'use client'

// これをクラウドにアップして、スマホで確認してみるか

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* smまでは表示されるが、smより小さいと表示されない */}
        <p className="invisible sm:visible">sm</p>
        {/* mdまでは表示されるが、mdより小さいと表示されない */}
        <p className="invisible md:visible">md</p>
        <p className="invisible lg:visible">lg</p>
        <p className="invisible xl:visible">xl</p>
        <p className="invisible zxl:visible">zxl</p>


        {/* ハイドの方が分かりやすいか？ */}
        <p className="sm:invisible">smより小さいと表示</p>
        <p className="md:invisible">mdより小さいと表示</p>
        <p className="lg:invisible">lgより小さいと表示</p>
        <p className="xl:invisible">xlより小さいと表示</p>
        <p className="zxl:invisible">zxlより小さいと表示</p>
        


        {/* smまでは濃い赤だが、smより小さいと薄い赤になる*/}
        <p className="text-red-100 sm:text-red-500">mobile first???</p>

        {/* つまりsm:が通常表示で、無しがスマホ表示と考えると分かりやすい＝モバイルファースト */}
      </main>
    )
}