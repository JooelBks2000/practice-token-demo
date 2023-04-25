const figmaApiExporter = require('figma-api-exporter').default;

const exporter = figmaApiExporter('figd_pH_mHW0_FNQml0PB57kCr4QUisS-HBSMQ-kSci97');

//页面canvas所有的svg图像
exporter
  .getSvgs({
    fileId: 'TVsq0X9lXtnjsqr4LXEGNZ',
    canvas:'Button Component'
  })
  .then(svgsData =>
    exporter.downloadSvgs({
      saveDirectory: './svgsFiles',
      svgsData: svgsData.svgs,
      lastModified: svgsData.lastModified,
      clearDirectory:true
    })
  );
