import type { HttpResponse } from '@vben/request';

import { h } from 'vue';

import { isEmpty } from '@vben/utils';

import { message } from 'ant-design-vue';

import { useAuthStore } from '#/store';

export function apiStatusCodeHandler(responseData: HttpResponse) {
  const authStore = useAuthStore();

  if (isEmpty(responseData)) {
    return;
  }
  const { code, data } = responseData;
  switch (code) {
    case 100_000: {
      const errorData = data as { desc: string; filed: string }[];
      const msgs = ['数据格式错误，请核对后重试。'];
      if (data && errorData.length > 0) {
        msgs.push('错误信息:');
        for (const failmsg of errorData) {
          msgs.push(`${failmsg?.filed}${failmsg.desc}`);
        }
        message.error({
          content: h(
            'div',
            {
              style: {
                display: 'inline-flex',
                flexDirection: 'column',
                textAlign: 'left',
              },
            },
            msgs.map((msg) => h('div', {}, msg)),
          ),
        });
      }
      break;
    }
    case 101_001: {
      message.error('用户不存在，请重新输入。');
      break;
    }
    case 101_002: {
      message.error('密码错误，请重新输入。');
      break;
    }
    case 101_011: {
      message.error('用户名重复，请重新输入。');
      break;
    }
    case 102_000: {
      message.error('操作失败，设备不存在。');
      break;
    }
    case 102_003: {
      message.error('设备已存在，请勿重复添加。');
      break;
    }
    case 102_004: {
      message.error('该设备尚未配置升级计划，无法进行升级。');
      break;
    }
    case 102_005: {
      message.error('设备升级计划已存在');
      break;
    }
    case 102_006: {
      message.error('您有尚未升级完成的设备，不能终止该计划。');
      break;
    }
    case 102_008: {
      message.error('设备尚未完成升级，不能删除。');
      break;
    }
    case 102_011: {
      message.error('设备已存在升级计划');
      break;
    }
    case 102_015: {
      message.error('设备添加失败，请稍后重试或联系研发人员。');
      break;
    }
    case 102_016: {
      message.error('设备模板中存在必填项为空的情况，请仔细检查');
      break;
    }
    case 102_018: {
      message.error('指令下发失败，请稍后重试或联系研发人员。');
      break;
    }
    case 102_019: {
      message.error('该设备正在执行升级计划，不能删除。');
      break;
    }
    case 102_022: {
      message.error('该设备升级计划不是主计划，不支持挂载');
      break;
    }
    case 102_025: {
      message.error('升级链路内不允许创建相同版本的计划，请检查版本号');
      break;
    }
    case 102_026: {
      message.error('升级计划已执行完毕，不允许挂载');
      break;
    }
    case 103_000: {
      message.error('地点名称已存在。');
      break;
    }
    case 103_001: {
      message.error('地点不存在。');
      break;
    }
    case 103_002: {
      message.error('上层地点不存在。');
      break;
    }
    case 105_000: {
      message.error('创建失败，地点名称重复。');
      break;
    }
    case 105_001: {
      message.error('导入失败，请核对导入数据的角色信息是否在平台存在。');
      break;
    }
    case 106_000: {
      message.error('机构已存在，不可重复创建。');
      break;
    }
    case 106_001: {
      message.error('导入失败，请核对导入数据的机构信息是否在平台存在。');
      break;
    }
    case 106_003: {
      message.error('Excel中输入机构与所选机构不一致，请仔细检查Excel文件内容');
      break;
    }
    case 108_001: {
      message.error('该预警级别已存在，不可重复创建');
      break;
    }
    case 201_004: {
      message.error('设备离线，请等待设备上线后重试。');
      break;
    }
    case 201_007: {
      message.error('操作失败，请重试。');
      break;
    }
    case 201_010: {
      message.error('此设备导入模板已废弃，请下载最新模板。');
      break;
    }
    case 300_001: {
      message.error('登录认证过期，请重新登录后继续。');
      authStore.logout();
      break;
    }
    case 900_001: {
      message.error('内部服务器错误，请稍后再试。');
      break;
    }

    default: {
      break;
    }
  }
}
