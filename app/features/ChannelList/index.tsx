import { Stack } from '@mui/material';
import ChannelTreeView from './ChannelTreeView';
import SearchChannel from './SearchChannel';

const ChannelList = () => {
  const networkList = [{
    name: "Network 1",
    channels: [{
      name: "Channel 1",
      users: [{
        name: "John"
      }, {
        name: "Doe"
      }]
    }, {
      name: "Channel 2",
      users: [{
        name: "Ram"
      }]
    }, {
      name: "Channel 3",
      users: [{
        name: "Ramco"
      }]
    }]
  }, {
    name: "Network 2",
    channels: [{
      name: "Channel 1",
      users: [{
        name: "KN Nagar"
      }, {
        name: "Ascrafte"
      }]
    }, {
      name: "Channel 2",
      users: [{
        name: "TPLink"
      }]
    }]
  }, {
    name: "Network 1",
    channels: [{
      name: "Channel 1",
      users: [{
        name: "John"
      }, {
        name: "Doe"
      }]
    }, {
      name: "Channel 2",
      users: [{
        name: "Ram"
      }]
    }, {
      name: "Channel 3",
      users: [{
        name: "Ramco"
      }]
    }]
  }, {
    name: "Network 2",
    channels: [{
      name: "Channel 1",
      users: [{
        name: "KN Nagar"
      }, {
        name: "Ascrafte"
      }]
    }, {
      name: "Channel 2",
      users: [{
        name: "TPLink"
      }]
    }]
  }, {
    name: "Network 1",
    channels: [{
      name: "Channel 1",
      users: [{
        name: "John"
      }, {
        name: "Doe"
      }]
    }, {
      name: "Channel 2",
      users: [{
        name: "Ram"
      }]
    }, {
      name: "Channel 3",
      users: [{
        name: "Ramco"
      }]
    }]
  }, {
    name: "Network 2",
    channels: [{
      name: "Channel 1",
      users: [{
        name: "KN Nagar"
      }, {
        name: "Ascrafte"
      }]
    }, {
      name: "Channel 2",
      users: [{
        name: "TPLink"
      }]
    }]
  }, {
    name: "Network 1",
    channels: [{
      name: "Channel 1",
      users: [{
        name: "John"
      }, {
        name: "Doe"
      }]
    }, {
      name: "Channel 2",
      users: [{
        name: "Ram"
      }]
    }, {
      name: "Channel 3",
      users: [{
        name: "Ramco"
      }]
    }]
  }, {
    name: "Network 2",
    channels: [{
      name: "Channel 1",
      users: [{
        name: "KN Nagar"
      }, {
        name: "Ascrafte"
      }]
    }, {
      name: "Channel 2",
      users: [{
        name: "TPLink"
      }]
    }]
  }];

  return (
    <Stack spacing={2}>
      <SearchChannel />
      <ChannelTreeView data={networkList} />
    </Stack>
  );
}

export default ChannelList;