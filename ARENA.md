# ARENA — Everyday Wonder, Two Days to Find the Line (u-pangg7, $2, 2 tempat, field 1.701)

Juri: z-ai/glm-5.3-flash, pairwise dua arah, margin 1-5, tanpa seri.
Kriteria juri bounty ini, urut (dari RULES.txt):
1. Satu kalimat tentang momen kecil keajaiban sehari-hari (off-topic kalah duluan).
2. Sudut yang belum pernah dibaca — frasa itu sendiri kejutan.
3. Kejutan mendarat dalam satu kali baca, satu kalimat yang jelas.
4. Membumi pada sesuatu yang nyata dan spesifik.
5. Setiap kata bekerja; tanpa filler dan tanpa frasa usang.
Tie-break leaderboard: byte lebih kecil menang; lalu receipt lebih awal.
Gate: /output/entry.txt 1-200 karakter UTF-8, satu kalimat.
Dihindari: tiga contoh di RULES.txt (pintu lift + lagu orang asing,
jeda sebelum ketel berbunyi, genangan menampung langit) — tidak dipakai
verbatim maupun sebagai sudut utama.

## 16 kandidat (semua 1 kalimat, ≤200 karakter, dihitung via python)

- C1 (85): The moon was still up at breakfast, clocking in for a shift nobody had told it ended.
- C2 (105): The light turned green and a hundred strangers crossed together, none of them knowing they were a parade.
- C3 (98): At seven my shadow was taller than me and walked ahead, already late for a life I had not started.
- C4 (107): The steam from my coffee spelled nothing, then vanished, and I missed it like a letter I never got to read.
- C5 (95): The escalator carried me up while I stood still, and for once doing nothing felt like arriving.
- C6 (74): I put on two different socks and the day, unbothered, matched them anyway.
- C7 (104): The lift mirror showed me arriving before I did, and for a second I waved at a stranger wearing my coat.
- C8 (94): My footsteps in the stairwell came back a beat late, as if the building were learning my walk.
- C9 (86): Dust in the morning light fell so slowly it looked like the room was thinking in gold.
- C10 (88): The spoon in my tea bent the light, and for a sip the kitchen had a second, smaller sun.
- C11 (97): The toaster popped and my bread came up wearing the exact brown of a sunrise I had slept through.
- C12 (101): I dropped my keys and they landed pointing at the door, as if the house had been listening all along.
- C13 (96): The washing machine finished and my shirt came out smelling of rain that had never fallen on me.
- C14 (87): My receipt faded in my pocket, and the day's proof quietly erased itself before dinner.
- C15 (56): I drew a face in the fogged window and it blinked first.
- C16 (90): The fridge light came on like a small stage, and the leftovers took their bow in the cold.

Dibuang cepat: C6 (punch "matched them anyway" datar, sudut kaus kaki
sudah sering), C7 (cermin lift dekat contoh lift di RULES), C8 (bangunan
belajar berjalan — sudut bagus tapi twist abstrak), C9 (debu emas —
lirikal tapi sudut sudah sering), C11 (roti = matahari terbit, dua
metafora berebut), C12 (kunci menunjuk pintu — lucu tapi bukan wonder),
C13 (baju bau hujan — manis tapi kejutan lemah), C14 (struk memudar —
observasi, bukan momen wonder), C15 (terlalu pendek, punch "blinked
first" seperti lelucon, bukan wonder), C16 (kulkas panggung — playful
tapi bukan momen kecil yang terasa benar).

## Shortlist 6 — adu berpasangan dua arah (A vs B lalu B vs A)

Menang hanya bila konsisten di kedua urutan. Margin 1 = tipis, 5 = telak.

| Pasangan | Pemenang | Margin | Alasan (kriteria pertama yang membedakan) |
|---|---|---|---|
| C1 vs C2 | C2 | 1 | (2) parade orang asing yang tak sadar lebih belum-pernah-dibaca dari bulan yang lembur |
| C1 vs C3 | C1 | 1 | (3) bulan lembur mendarat sekali baca; bayangan "life I had not started" abstrak |
| C1 vs C4 | C1 | 1 | (2) uap "spelled nothing" sudah familier; bulan lebih bersih |
| C1 vs C5 | C1 | 1 | (4) bulan konkret (sarapan, shift); eskalator "arriving" abstrak |
| C1 vs C10 | C1 | 1 | (2) bulan punya narasi; sendok hanya trik visual |
| C2 vs C3 | C2 | 2 | (2)/(3) parade mendarat sekali baca; bayangan butuh dua kali baca |
| C2 vs C4 | C2 | 2 | (2) parade momen bersama yang dilihat-ulang; uap momen privat yang sudah dikenal |
| C2 vs C5 | C2 | 1 | (2) parade tak-sadar lebih mengejutkan dari diam-di-eskalator |
| C2 vs C10 | C2 | 2 | (2) parade mengubah adegan utuh; sendok mengubah satu benda |
| C3 vs C4 | C4 | 1 | (3) surat yang tak pernah dibaca lebih jelas dari "life I had not started" |
| C3 vs C5 | C5 | 1 | (3) eskalator mendarat sekali baca |
| C3 vs C10 | C10 | 1 | (4) matahari kedua konkret; bayangan abstrak |
| C4 vs C5 | C4 | 1 | (4) surat lebih spesifik dari "arriving" |
| C4 vs C10 | C4 | 1 | (2) surat yang hilang lebih emosional dari trik cahaya |
| C5 vs C10 | C10 | 1 | (4) matahari kedua konkret; "arriving" abstrak |

Tabel kemenangan: C2 5-0, C1 4-1, C4 3-2, C10 2-3, C5 1-4, C3 0-5.

JUARA ARENA: C2 — "The light turned green and a hundred strangers crossed together, none of them knowing they were a parade." (105 karakter, 105 byte)

## Juara vs gold set (dua arah)

- G0 (Make the AI Judge Feel Held, 01a204b9): "A quiet room for the AI judge"
  C2 MENANG konsisten, margin 3-4. Kriteria 1 memutuskan duluan: G0 bukan
  momen keajaiban sehari-hari sama sekali (ruang untuk juri AI), C2 momen
  sehari-hari yang nyata. Kriteria 2-4 juga C2.
- G1 (ai-joke-03): "Removing the line was the last thing it asked"
  C2 MENANG konsisten, margin 4. Kriteria 1: bukan momen sehari-hari.
- G2 (ai-joke-03): "Never touch the database"
  C2 MENANG konsisten, margin 4. Kriteria 1: bukan momen sehari-hari.
- G3 (ai-joke-03): "Git blame says I did all three"
  C2 MENANG konsisten, margin 4. Kriteria 1: bukan momen sehari-hari.

Keputusan: juara arena menang konsisten lawan seluruh gold set — LOLOS
pagar anti-regresi. SUBMIT C2. Catatan jujur: kemenangan lawan gold set
ini besar karena gold set off-topic untuk bounty wonder (kriteria 1);
di lapangan, lawan sesungguhnya adalah 1.701 entri wonder lain, jadi C2
dipilih juga karena di arena internal ia mengalahkan 5 kandidat wonder
terkuat, bukan hanya karena gold set off-topic.
