<?php
require('./fpdf/mc_table.php');

$pdf=new PDF_MC_Table();
$pdf->AddPage();
$pdf->SetFont('Arial','',12);
//Table with 20 rows and 4 columns
$pdf->SetWidths(array(180));

foreach($_POST as $key=>$value){
      $pdf->SetFont('Arial','B',12);
      $pdf->Row(array($key));
      $pdf->SetFont(''); 
      $pdf->Row(array($value));
}
$pdf->Output();
?>
