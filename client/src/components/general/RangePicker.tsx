import generateRangePicker from 'antd/es/date-picker/generatePicker/generateRangePicker';
import 'antd/es/date-picker/style/index';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';

export const RangePicker = generateRangePicker<Date>(dateFnsGenerateConfig);
