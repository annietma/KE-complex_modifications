console.log(
  JSON.stringify(
    {
      title: 'Lock screen and sleep by fn+s',
      maintainers: ['tekezo'],
      rules: [
        {
          description: 'Lock screen and sleep by fn+s (rev 1)',
          manipulators: [
            {
              type: 'basic',
              from: {
                key_code: 's',
                modifiers: {
                  mandatory: ['fn'],
                },
              },
              to: [
                // Lock Screen
                { key_code: 'q', modifiers: ['left_command', 'left_control'] },

                // Sleep
                {
                  shell_command: '/bin/sleep 1; /usr/bin/pmset sleepnow',
                },
              ],
            },
          ],
        },
      ],
    },
    null,
    '  '
  )
)